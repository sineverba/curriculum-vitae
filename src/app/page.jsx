"use client";

import React from "react";
import FooterPage from "./components/common/FooterPage";
import programmingLanguagesOptions from "./utils/methods/programmingLanguagesOptions";
import {
  useGetDatabasesQuery,
  useGetFrameworksQuery,
  useGetProgrammingLanguagesQuery,
  useGetToolsQuery,
  useGetWorkingModesQuery
} from "./features/apiSlice";
import Chart from "./components/common/Chart";
import frameworksOptions from "./utils/methods/frameworksOptions";
import toolsOptions from "./utils/methods/toolsOptions";
import databasesOptions from "./utils/methods/databasesOptions";
import workingModesOptions from "./utils/methods/workingModeOptions";

export default function Page() {
  const { data: programmingLanguages } = useGetProgrammingLanguagesQuery();
  const { data: frameworks } = useGetFrameworksQuery();
  const { data: tools } = useGetToolsQuery();
  const { data: databases } = useGetDatabasesQuery();
  const { data: workingModes } = useGetWorkingModesQuery();

  const options = [
    {
      key: 1,
      value: programmingLanguages
        ? programmingLanguagesOptions(programmingLanguages)
        : null
    },
    {
      key: 2,
      value: frameworks ? frameworksOptions(frameworks) : null
    },
    {
      key: 3,
      value: tools ? toolsOptions(tools) : null
    },
    {
      key: 4,
      value: databases ? databasesOptions(databases) : null
    },
    {
      key: 5,
      value: workingModes ? workingModesOptions(workingModes) : null
    }
  ];

  return (
    <div className="container mx-auto">
      {options.map(
        (option) =>
          option.value && <Chart key={option.key} options={option.value} />
      )}
      <FooterPage />
    </div>
  );
}
