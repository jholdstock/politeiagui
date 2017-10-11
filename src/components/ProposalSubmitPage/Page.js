import React from "react";
import { reduxForm, Field } from "redux-form";
import LoadingPage from "../LoadingPage";
import MarkdownEditorField from "../Form/Fields/MarkdownEditorField";
import ErrorField from "../Form/Fields/ErrorField";
import validate from "./validator";

const SubmitPage = ({
  isSaving,
  error,
  onSave,
  handleSubmit,
}) => isSaving ? <LoadingPage /> : (
  <div>
    <form onSubmit={handleSubmit(onSave)}>
      {error ? <div className="error">{error}</div> : null}
      <Field
        name="global"
        component={ErrorField}
      />
      <h2>
        <Field
          name="name"
          component="input"
          type="text"
          placeholder="Proposal Name"
        />
      </h2>
      {error ? (
        <div className={"error"}>
          {(typeof error === "string") ? error : (
            <pre>{JSON.stringify(error, null, 2)}</pre>
          )}
        </div>
      ) : null}

      <Field
        name="description"
        component={MarkdownEditorField}
        placeholder="Markdown Entry"
        rows={20}
        cols={80}
      />
      <input type="submit" value="Save" />
    </form>
  </div>
);

export default reduxForm({ form: "form/proposal", validate })(SubmitPage);