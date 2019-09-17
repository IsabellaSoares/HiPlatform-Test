import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Tree } from 'antd';
import Data from './data.json';

const { TreeNode } = Tree;
const treeData = Object.entries(Data);

class App extends Component {
  state = {
    expandedKeys: JSON.parse(localStorage.getItem("expandedKeys")),
    checkedKeys: JSON.parse(localStorage.getItem("checkedKeys")),
    selectedKeys: JSON.parse(localStorage.getItem("selectedKeys")),
  };

  onExpand = expandedKeys => {
    this.setState({ expandedKeys });
    localStorage.setItem("expandedKeys", JSON.stringify(expandedKeys));
  };

  onCheck = checkedKeys => {
    this.setState({ checkedKeys });
    localStorage.setItem("checkedKeys", JSON.stringify(checkedKeys));
  };

  onSelect = (selectedKeys) => {
    this.setState({ selectedKeys });
    localStorage.setItem("selectedKeys", JSON.stringify(selectedKeys));
  };

  renderTreeNodes = data =>    
    data.map(item => {
      let node = item[1];
      let node_children = Object.entries(item[1].children);

      return (
        <TreeNode title={node.name} key={node.id} dataRef={node}>
          {node_children.length > 0 && this.renderTreeNodes(node_children)}
        </TreeNode>
      );
    });

  render() {
    return (
      <Tree
        checkable
        onExpand={this.onExpand}
        expandedKeys={this.state.expandedKeys}
        onCheck={this.onCheck}
        checkedKeys={this.state.checkedKeys}
        onSelect={this.onSelect}
        selectedKeys={this.state.selectedKeys}
      >
        {this.renderTreeNodes(treeData)}
      </Tree>
    );
  }
}          

export default App;
