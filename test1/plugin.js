module.exports = function({ types: t }) {
  // 将 let 和 const 关键字替换为 var

  return {
    visitor: {
      VariableDeclaration(path) {
        const node = path.node;
        if (["let", "const"].includes(node.kind)) {
          node.kind = "var";
        }
      }
    }
  };
};
