/**
 * Convert values got from API to values for highchart
 */
const databasesValuesConverter = (items) =>
  items.map((item) => ({
    name: item.database_name,
    y: item.use_percentage
  }));

export default databasesValuesConverter;
