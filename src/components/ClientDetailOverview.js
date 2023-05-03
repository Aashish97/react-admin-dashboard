import React, { PureComponent } from "react";

export default class ClientFullDetail extends PureComponent {
  render() {
    return (
      <div className="container mx-auto px-6 mt-10">
        <div className="grid grid-rows-2 grid-flow-col gap-4 text-left">
          <div className="row-span-2 shadow-2xl rounded-lg p-8 m-2 text-sm ">
            <p className="font-bold text-xl">Client Details</p>
            <div class="grid grid-cols-1">
              <div className="border-b-2 py-3">
                <p className="font-semibold">Name</p>
                <p>Aashish Shrestha</p>
              </div>
              <div className="border-b-2 py-3">
                <p className="font-semibold">Email</p>
                <p>dummy@email.com</p>
              </div>
              <div className="border-b-2 py-3">
                <p className="font-semibold">Contact</p>
                <p>9843435678</p>
              </div>
              <div className="border-b-2 py-3">
                <p className="font-semibold">Domain</p>
                <a href="https://aashish.realhrsoft.com.np">
                  aashish.realhrsoft.com.np
                </a>
              </div>
              <div className="border-b-2 py-3">
                <p className="font-semibold">Expiry Date</p>
                <p>01/01/2023</p>
              </div>
              <div className="border-b-2 py-3">
                <p className="font-semibold">Organization Size</p>
                <p>0-50 Employee</p>
              </div>
              <div className="border-b-2 py-3">
                <p className="font-semibold">Country</p>
                <p>Nepal</p>
              </div>

              <div className="py-3">
                <p className="font-semibold">Created Date</p>
                <p>01/01/2023</p>
              </div>
            </div>
          </div>
          <div className="row-span-1/3 col-span-2 shadow-2xl rounded-lg p-8 m-2 text-sm">
            <p className="font-bold text-xl">Client Statistics</p>
            <div class="grid grid-cols-1">
              <div className="border-b-2 py-3">
                <p className="font-semibold">User Count</p>
                <p>99</p>
              </div>
              <div className="border-b-2 py-3">
                <p className="font-semibold">Organization Count</p>
                <p>4</p>
              </div>
              <div className="py-3">
                <p className="font-semibold">Enabled Features</p>
                <div className="mt-1">
                  <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-purple-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                    Payroll
                  </div>
                  <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-purple-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white ml-1">
                    Attendance
                  </div>
                  <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-purple-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white ml-1">
                    Leave
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-2/3 col-span-2 shadow-2xl rounded-lg p-8 m-2 text-sm">
            <p className="font-bold text-xl">Monitoring</p>
            <div class="grid grid-cols-1">
              <div className="border-b-2 py-3">
                <p className="font-semibold">Ram Usage</p>
                <p>3/4 GB</p>
              </div>
              <div className="border-b-2 py-3">
                <p className="font-semibold">Storage Usage</p>
                <p>25/30 GB</p>
              </div>
              <div className="py-3">
                <p className="font-semibold">Current Version</p>
                <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-purple-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white ml-1 mt-1">
                  3.0.22.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
