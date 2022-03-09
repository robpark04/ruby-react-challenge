import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { setupStore } from "testUtils/setupStore";
import AddEditTournament from "./AddEditTournament";
import * as apiService from "utils/apis";
import { tournamentFactory } from "testUtils/factories";

const postAPIMock = jest.spyOn(apiService, "postApi");
postAPIMock.mockResolvedValue({});

const renderComponent = (tournament?: Tournament) => {
  render(
    <Provider store={setupStore({})}>
      <AddEditTournament tournament={tournament} />
    </Provider>
  );
};

describe("AddEditTournament", () => {
  describe("Add Tournament", () => {
    it("should render component", () => {
      renderComponent();
      expect(screen.getByRole("button")).toHaveTextContent("Add Tournament");
    });
    it("should show dialog", () => {
      renderComponent();
      userEvent.click(screen.getByRole("button"));
      expect(screen.getByText("Save")).toBeInTheDocument();
    });
    it("save button click should call api with right player args", () => {
      renderComponent();
      userEvent.click(screen.getByRole("button"));
      userEvent.type(screen.getByTestId("name"), "Test Name");
      userEvent.type(screen.getByTestId("course_name"), "Test Course Name");
      userEvent.click(screen.getByText("Save"));
      expect(postAPIMock).toHaveBeenCalledWith("tournaments", {
        name: "Test Name",
        course_name: "Test Course Name",
      });
    });
  });

  describe("Edit Player", () => {
    it("calls save with right player arguments", () => {
      const tournament = tournamentFactory.build();
      renderComponent(tournament);
      userEvent.click(screen.getByRole("button"));
      userEvent.clear(screen.getByTestId("name"));
      userEvent.type(screen.getByTestId("name"), "Test Name");
      userEvent.click(screen.getByText("Save"));
      expect(postAPIMock).toHaveBeenCalledWith(
        `tournaments/${tournament.id}`,
        {
          ...tournament,
          name: "Test Name",
          created_at: null,
          updated_at: null,
        },
        apiService.API_POST_TYPES.UPDATE
      );
    });
  });
});
