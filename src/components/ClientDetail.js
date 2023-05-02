import React, { PureComponent } from "react";
import ClientSetting from "./ClientSetting";
import ClientFullDetail from "./ClientDetailOverview";

export default class ClientDetail extends PureComponent {
  constructor() {
    super();
    this.state = {
      showSettingDetail: false,
      detailBackgroundColor: "bg-white",
      settingBackgroundColor: "bg-gray-300",
    };
  }
  handleClick(flag) {
    this.setState({
      showSettingDetail: flag,
      detailBackgroundColor: flag ? "bg-gray-300" : "bg-white",
      settingBackgroundColor: flag ? "bg-white" : "bg-gray-300",
    });
  }
  render() {
    return (
      <>
        <div className="bg-gray-200 w-full">
          <div className="container mx-2">
            <ul className="hidden sm:flex flex-row pt-8">
              <li
                className={`rounded-t w-32 h-12 flex items-center justify-center ${this.state.detailBackgroundColor} text-sm text-gray-800 cursor-pointer`}
                onClick={() => this.handleClick(false)}
              >
                Overview
              </li>
              <li
                className={`rounded-t w-32 h-12 flex items-center justify-center ${this.state.settingBackgroundColor} mx-1 text-sm text-gray-800 cursor-pointer`}
                onClick={() => this.handleClick(true)}
              >
                Settings
              </li>
            </ul>
          </div>
        </div>
        {!this.state.showSettingDetail && <ClientFullDetail />}
        {this.state.showSettingDetail && <ClientSetting />}
      </>
    );
  }
}
