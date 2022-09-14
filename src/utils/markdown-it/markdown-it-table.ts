export default (md: any, opt: any) => {
  md.core.ruler.push("table", makeRule());
};

function makeRule() {
  return function addTableClass(state: any) {
    for (let i = 0; i < state.tokens.length - 1; i++) {
      if (state.tokens[i].type !== "table_open") {
        continue;
      }
      state.tokens[i].attrPush(["class", "table"]);
    }
  };
}
