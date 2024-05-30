const extraValues = new Map();

extraValues.set("APP_NAME", "Curriculum Vitae");
extraValues.set("SESSIONSTORAGE_ACCESS_TOKEN", "CurriculumVitaeAccessToken");
extraValues.set("BACKEND_URL", process.env.NEXT_PUBLIC_BACKEND_URL);
extraValues.set("URL_VERSIONS", "versions");
extraValues.set("URL_PROGRAMMING_LANGUAGES", "programming-languages");
extraValues.set("URL_FRAMEWORKS", "frameworks");
extraValues.set("URL_TOOLS", "tools");
extraValues.set("URL_DATABASES", "databases");
extraValues.set("URL_WORKING_MODE", "working-mode");
extraValues.set("REDUX_REDUCER_PATH", "apiSlice");
extraValues.set("REDUX_TAG_VERSIONS", "versions");
extraValues.set("REDUX_TAG_PROGRAMMING_LANGUAGES", "programmingLanguages");
extraValues.set("REDUX_TAG_FRAMEWORKS", "frameworks");
extraValues.set("REDUX_TAG_TOOLS", "tools");
extraValues.set("REDUX_TAG_DATABASES", "databases");
extraValues.set("REDUX_TAG_WORKING_MODES", "workingModes");


export default extraValues;
