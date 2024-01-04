import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import right from '../assets/right-arrow.png';

function UserData() {
  const [carBrand, setCarBrand] = useState('');
  const [carModel, setCarModel] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [toast, setToast] = useState('hidden');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const reservationId = localStorage.getItem('ReservationId');

  const carInfo = {
    carBrand: carBrand,
    carModel: carModel,
    licensePlate: licensePlate
  };

  const VLicense = (license) => {
    return /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{2,8}$/.test(license);
  };

  const VCarModel = (carModel) => {
    const currentYear = new Date().getFullYear();
    const regex = new RegExp(`^(19[0-9]{2}|20[0-1][0-9]|20[2][0-${currentYear.toString().slice(-1)}])$`);
    return regex.test(carModel);
  };

  const postData = () => {
    if (!carBrand || !carModel || !licensePlate) {
      setMessage('جميع الحقول مطلوبة');
      setToast('text-red-700');
      return;
    }

    if (!VLicense(licensePlate)) {
      setMessage('رقم لوحة السيارة غير صالح');
      setToast('text-red-700');
      return;
    }
    if (!VCarModel(carModel)) {
      setMessage('موديل السيارة غير صالح');
      setToast('text-red-700');
      return;
    }

    axios
      .put(`https://658c45f8859b3491d3f5d2ff.mockapi.io/Reservation/${reservationId}`, {
        carInfo: carInfo
      })
      .then((response) => {
        navigate('/checkout');
      })
      .catch((error) => {
        setMessage('حدث خطأ أثناء حفظ البيانات');
        setToast('text-red-700');
      });
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen flex flex-col gap-5 items-center justify-center">
      <div className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[60%]">
        <p className="font-medium text-yellow-500">بيانات السيارة</p>
        <h1 className="mt-3 font-semibold text-gray-800 md:text-xl">أنت على بعد خطوة واحدة لحجزك.</h1>
        <p className="mt-2 text-gray-500">ادخل بيانات سيارتك هنا</p>
      </div>
      <div className="bg-white w-full max-w-[90%] md:max-w-[80%] lg:max-w-[60%] rounded-lg shadow-lg p-8">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2 mt-4" htmlFor="car-make">
            ماركة السيارة
          </label>
          <input
            value={carBrand}
            onChange={(e) => setCarBrand(e.target.value)}
            className="border border-gray-400 rounded-lg py-2 px-4 w-full"
            type="text"
            id="car-make"
            placeholder="ادخل ماركة السيارة"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="car-model">
            موديل السيارة
          </label>
          <input
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            className="border border-gray-400 rounded-lg py-2 px-4 w-full"
            type="text"
            id="car-model"
            placeholder="ادخل موديل السيارة"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="car-license">
            رقم لوحة السيارة
          </label>
          <input
            value={licensePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
            className="border border-gray-400 rounded-lg py-2 px-4 w-full"
            type="text"
            id="car-license"
            placeholder="ادخل رقم لوحة السيارة"
          />
        </div>
        <p className={`text-wrap flex ${toast}`}>{message}</p>
        <button
          onClick={postData}
          className="btn btn-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
        >
          حفظ
        </button>
      </div>
    </div>
  );
}

export default UserData;