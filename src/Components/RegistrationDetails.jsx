import React, { useState } from "react";
import { FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";
import { SiRazorpay, SiStripe, SiGooglepay, SiPhonepe, SiPaytm, SiAmazonpay } from "react-icons/si";
import { MdOutlineCreditCard, MdOutlineAccountBalanceWallet } from "react-icons/md";
import { AiOutlineBank } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";

function RegistrationDetails() {
    const [newCard,setNewCard] = useState(false);
    const [upi,setUpi] = useState(false);
  return (
    <div className="bg-gray-50 shadow-lg rounded-xl p-8 mx-auto">
      {/* Header */}
      <h2 className="text-red-600 font-bold text-xl mb-6">Complete Registration Payment</h2>

      {/* Address Section */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input type="text" placeholder="Address Line" className=" bg-white rounded-lg p-2 shadow-2xl w-full" />
        <input type="text" placeholder="City" className=" bg-white rounded-lg p-2 w-full shadow-2xl" />
        <input type="text" placeholder="State" className=" bg-white rounded-lg p-2 w-full shadow-2xl" />
        <input type="text" placeholder="Postal Code" className=" bg-white rounded-lg p-2 w-full shadow-2xl" />
      </div>

      {/* Payment Methods */}
      <h3 className="font-semibold mb-2">Payment methods</h3>
      <div className="flex items-center gap-4 mb-6">
        <SiRazorpay size={40} className="text-blue-600" />
        <FaCcVisa size={40} className="text-blue-700" />
        <SiStripe size={40} className="text-indigo-600" />
        <FaCcMastercard size={40} className="text-red-600" />
        <FaCcAmex size={40} className="text-blue-500" />
        <SiGooglepay size={40} className="text-green-600" />
        <span className="text-red-600 font-medium">+ Pay at hotel</span>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Credit & Debit Cards */}
        <div className=" bg-white rounded-xl p-4 shadow-lg">
          <h4 className="font-semibold mb-3">Credit & Debit Cards</h4>
          <div className="flex items-center gap-2 p-2 border rounded-lg mb-2">
            <MdOutlineCreditCard />
            <span>Axis Bank **** 8365</span>
          </div>
          <div className="flex items-center gap-2 p-2 border rounded-lg mb-2">
            <FaCcVisa className="text-blue-600" />
            <span>HDFC Bank **** 6248</span>
          </div>

           <button onClick={()=>{setNewCard(!newCard)}} className="cursor-pointer text-red-500 font-semibold mt-4 mb-2">Add New Card</button>
                   
{ newCard &&
<>
          <input type="text" placeholder="Enter 12 digit card number" className="border rounded-lg p-2 w-full mb-2" />
          <div className="grid grid-cols-3 gap-2 mb-2">
            <input type="text" placeholder="MM/YY" className="border  rounded-lg p-2 w-full" />
            <input type="text" placeholder="CVV" className="border rounded-lg p-2 w-full" />
            <input type="text" placeholder="Name on Card" className="border rounded-lg p-2 w-full col-span-3" />
          </div> 
</>
}
                  </div>


        {/* UPI Section */}
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <h4 className="font-semibold mb-3">UPI</h4>
          <div className="flex items-center gap-2 p-2 border rounded-lg mb-2">
            <SiGooglepay className="text-green-600" />
            <span>Google Pay</span>
          </div>
          <div className="flex items-center gap-2 p-2 border rounded-lg mb-2">
            <SiPhonepe className="text-purple-600" />
            <span>PhonePe</span>
          </div>
          <button onClick={()=>setUpi(!upi)} className="flex cursor-pointer font-semibold text-red-500 items-center gap-2 p-2 rounded-lg mt-4 mb-2">
            <MdOutlineCreditCard />
            <span>Add New UPI ID</span>
          </button>


{upi &&
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <SiGooglepay className="text-green-600" /> <button className="text-red-500">+ Add</button>
            </div>
            <div className="flex justify-between items-center">
              <SiPhonepe className="text-purple-600" /> <button className="text-red-500">+ Add</button>
            </div>
            
            <div className="flex justify-between items-center">
              <SiPaytm className="text-blue-600" /> <button className="text-red-500">+ Add</button>
            </div>
            <div className="flex justify-between items-center">
              <SiAmazonpay className="text-black" /> <button className="text-red-500">+ Add</button>
            </div>
          </div>
}
                            </div>


        {/* More Payment Options */}
        <div className="bg-white  rounded-xl p-4 shadow-lg">
          <h4 className="font-semibold mb-3">More Payment Options</h4>
          <div className="flex items-center gap-2 p-2 border rounded-lg mb-2">
            <MdOutlineAccountBalanceWallet /> <span>Wallet</span>
          </div>
          <div className="flex items-center gap-2 p-2 border rounded-lg mb-2">
            <AiOutlineBank /> <span>Net Banking</span>
          </div>
          <div className="flex items-center gap-2 p-2 border rounded-lg mb-2">
            <IoMdHome /> <span>Pay at Hotel</span>
          </div>
        </div>
      </div>

     <div className="flex justify-start items-center gap-2 mt-6">
  <input type="checkbox" className="mt-1 w-4 h-4" />
  <p className="text-xs text-gray-600">
    By proceeding, I agree to all the{" "}
    <span className="text-red-600 cursor-pointer">User agreement</span>,{" "}
    <span className="text-red-600 cursor-pointer">Terms of service</span> and{" "}
    <span className="text-red-600 cursor-pointer">
      Cancellation & Property booking policies
    </span>.
  </p>
</div>


      {/* Button */}
      <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg mt-4">
        PAY NOW
      </button>
    </div>
  );
}

export default RegistrationDetails;
