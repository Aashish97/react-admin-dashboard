import React, { PureComponent } from "react";

export default class Chip extends PureComponent {
  render() {
    const { status } = this.props;
    const bgColor = {
      Approved: "bg-green-500",
      Declined: "bg-red-300",
      Unverified: "bg-blue-600",
      Stopped: "bg-red-700",
    }[status];
    return (
      <div
        className={`center relative inline-block select-none whitespace-nowrap rounded-lg ${bgColor} py-2 px-3.5 align-baseline font-sans text-xs font-bold leading-none text-white`}
      >
        {status}
      </div>
    );
  }
}
