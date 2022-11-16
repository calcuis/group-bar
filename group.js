class Group extends react.exports.Component {
  render() {
    var person1 = {
      x: ["Jul", "Aug", "Sep", "Oct", "Nov"],
      y: [250, 200, 300, 450, 500],
      name: "Mary",
      type: "bar"
    };
    var person2 = {
      x: ["Jul", "Aug", "Sep", "Oct", "Nov"],
      y: [150, 250, 250, 350, 400],
      name: "Alan",
      type: "bar"
    };
    var data = [person1, person2];
    return /* @__PURE__ */ jsx(Plot, {
      data,
      layout: {
        width: 800,
        height: 600,
        title: "Monthly income"
      }
    });
  }
}
