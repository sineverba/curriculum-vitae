import databasesValuesConverter from "@/app/utils/methods/databasesValuesConverter";
import databases from "../../__mocks__/responses/databases";

describe("Test databasesValuesConverter util function", () => {
  it("Can convert values", () => {
    const expectedResult = [
      { name: "Mongo DB", y: 10 },
      { name: "MySql", y: 30 },
      { name: "Maria DB", y: 20 },
      { name: "PostgreSql", y: 20 },
      { name: "Oracle", y: 20 }
    ];

    expect(databasesValuesConverter(databases)).toStrictEqual(expectedResult);
  });
});
