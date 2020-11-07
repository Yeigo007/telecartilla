function createPivot() {
  var pivot = new Flexmonster({
    container: "pivot-container",
    componentFolder: "https://cdn.flexmonster.com/",
    width: "100%",
    height: 430,
    toolbar: true,
    report: {
      dataSource: {
        filename: "data/data.csv"
      },
      slice: {
        columns: [{
          uniqueName: "Color"
        }],
        rows: [{
          uniqueName: "Country"
        }, {
          uniqueName: "[Measures]"
        }],
        measures: [{
          uniqueName: "Price",
          format: "currency"
        }, {
          uniqueName: "Discount",
          format: "currency"
        }],
      },
      formats: [{
        name: "currency",
        currencySymbol: "$",
        currencySymbolAlign: "left",
        thousandsSeparator: ",",
        decimalPlaces: 2
      }],
      conditions: [{
        formula: "#value < 2000",
        measure: "Discount",
        format: {
          backgroundColor: "#CCFFCC",
        }
      }, {
        formula: "AND(#value > 2000, #value < 4000)",
        measure: "Discount",
        format: {
          backgroundColor: "#FFFF99",
        }
      }]
    }
  });
};
