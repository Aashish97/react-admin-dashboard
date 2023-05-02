import React, { PureComponent } from "react";

export default class ClientSetting extends PureComponent {
  render() {
    return (
      <>
        <div className="container flex flex-col">
          <div className="text-left m-6">
            <label for="expiry-date" className="text-gray-700">
              Expiry Date
            </label>
            <input
              type="date"
              id="expiry-date"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-1"
              name="expiryDate"
              placeholder="Expiry date"
            />
          </div>
          <div className="text-left m-6">
            <label for="organization-size" className="text-gray-700">
              Max Organization Size
            </label>
            <input
              type="number"
              id="organization-size"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-1"
              name="organizationSize"
              placeholder="Maximum organization size"
            />
          </div>
          <div className="text-left m-6">
            <label for="user-count" className="text-gray-700">
              Max User Count
            </label>
            <input
              type="number"
              id="user-count"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-1"
              name="userCount"
              placeholder="Maximum user count"
            />
          </div>
        </div>
        <div className="flex justify-end mr-6">
          <div className="mx-1">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Save
            </button>
          </div>
          <div className="">
            <button className="bg-transparent hover:bg-gray-50 text-blue-700 font-bold px-6 py-3  hover:text-white border border-black rounded">
              <p className="text-sm font-medium leading-none text-black">
                Cancel
              </p>
            </button>
          </div>
        </div>
      </>
    );
  }
}
