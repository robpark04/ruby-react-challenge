import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { setupStore } from "testUtils/setupStore";
import AddEditPlayer from "./AddEditPlayer";
import * as apiService from "utils/apis";
import { playerFactory } from "testUtils/factories";

const postAPIMock = jest.spyOn(apiService, "postApi");
postAPIMock.mockResolvedValue({});

const renderComponent = (player?: Player) => {
  render(
    <Provider store={setupStore({})}>
      <AddEditPlayer player={player} />
    </Provider>
  );
};

describe("AddEditPlayer", () => {
  describe("Add Player", () => {
    it("should render component", () => {
      renderComponent();
      expect(screen.getByRole("button")).toHaveTextContent("Add New Player");
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
      userEvent.type(screen.getByTestId("handicap"), "1");
      userEvent.type(screen.getByTestId("location"), "Location");
      userEvent.click(screen.getByText("Save"));
      expect(postAPIMock).toHaveBeenCalledWith("players", {
        name: "Test Name",
        handicap: "1",
        location: "Location",
      });
    });
  });

  describe("Edit Player", () => {
    it("calls save with right player arguments", () => {
      const player = playerFactory.build();
      renderComponent(player);
      userEvent.click(screen.getByRole("button"));
      userEvent.clear(screen.getByTestId("name"));
      userEvent.type(screen.getByTestId("name"), "Test Name");
      userEvent.clear(screen.getByTestId("handicap"));
      userEvent.type(screen.getByTestId("handicap"), "1");
      userEvent.clear(screen.getByTestId("location"));
      userEvent.type(screen.getByTestId("location"), "Location");
      userEvent.click(screen.getByText("Save"));
      expect(postAPIMock).toHaveBeenCalledWith(
        `players/${player.id}`,
        {
          ...player,
          name: "Test Name",
          handicap: "1",
          location: "Location",
          created_at: null,
          updated_at: null,
        },
        apiService.API_POST_TYPES.UPDATE
      );
    });
  });
});
