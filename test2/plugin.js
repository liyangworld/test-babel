// 将箭头函数替换为普通函数

module.exports = function({ types: t }) {
  return {
    visitor: {
      ArrowFunctionExpression(path) {
        let { id, params, body, generator, async } = path.node;
        if (!t.isBlockStatement(body)) {
          const node = t.returnStatement(body);
          body = t.blockStatement([node]);
        }
        let functionExpr = t.functionExpression(
          id,
          params,
          body,
          generator,
          async
        );
        path.replaceWith(functionExpr);
      }
    }
  };
};
