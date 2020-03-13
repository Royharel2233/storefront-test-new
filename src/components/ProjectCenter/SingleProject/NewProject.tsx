import React from "react";

// import axios from "axios";

import { Overlay } from "../../../@next/components/organisms/Overlay/Overlay";

import "../style/style.scss";

interface NewProjectProps {
  show: boolean;
  hide: () => void;
}

export const NewProject: React.FC<NewProjectProps> = ({ show, hide }) => {
  const [newProjectState, setNewProjectState] = React.useState({
    name: "",
    description: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "https://luxout-project-center.herokuapp.com/newProject";
    try {
      const request = fetch(url, {
        method: "POST",
        body: JSON.stringify({
          api_key: "FaYcrwjR$@8KRnJsw1asn02sfZ",
          userID: "839409djdj39djk39dj",
          name: newProjectState.name,
          description: newProjectState.description,
          notes: newProjectState.notes,
        }),
      });
      const response = await (await request).text();
      console.warn(response);
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleChange = (input: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    // returns boolean
    e.preventDefault();
    // sets the user's new address object to the state
    setNewProjectState({
      ...newProjectState,
      [input]: value,
    });
  };

  return (
    <Overlay position={"center"} show={show} hide={hide}>
      <div className="new-project container">
        <p onClick={() => hide()} className="close-button text-right m-2 p-1">
          X
        </p>
        <div className="header col-sm-12 text-center mt-5">
          <span className="p-2">Creating a New Project</span>
        </div>
        <div className="new-project-form p-2 mt-5">
          <form onSubmit={e => handleSubmit(e)}>
            <div className="form-row w-50 m-auto p-2">
              <label htmlFor="name">PROJECT NAME</label>
              <input
                name="name"
                autoComplete="name"
                type="text"
                onChange={handleChange("name")}
                required
              />
            </div>
            <div className="form-row w-50 m-auto p-2">
              <label htmlFor="description">DESCRIPTION</label>
              <input
                name="description"
                autoComplete="description"
                type="text"
                onChange={handleChange("description")}
                required
              />
            </div>
            <div className="form-row w-50 m-auto p-2">
              <label htmlFor="notes">NOTES</label>
              <input
                name="notes"
                autoComplete="notes"
                type="text"
                onChange={handleChange("notes")}
                required
              />
            </div>
            <div className="submit m-auto p-1">
              <button className="text" type="submit">
                CREATE
              </button>
            </div>
          </form>
        </div>
      </div>
    </Overlay>
  );
};
