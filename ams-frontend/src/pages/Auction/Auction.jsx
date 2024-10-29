import React from "react";
import { useState, useEffect } from "react";
import SideBar from "../../components/layout/SideBar/SideBar";
import HeaderSeller from "../../components/layout/HeaderSeller/HeaderSeller";
import axiosInstance from "../../utils/axiosInstance";


function Auction() {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [breadcrumb, setBreadcrumb] = useState("Lansuwa > ");

    const toggleSidebarVisibility = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const handleBreadcrumbChange = (newBreadcrumb) => {
        /**
         * Update the breadcrumb state with the new breadcrumb string.
         * @param {string} newBreadcrumb The new breadcrumb string.
         */
        setBreadcrumb(newBreadcrumb);
    };

    // useStates to store the form data
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [shippingfee, setShippingfee] = useState(0.01);

    const [categoryId, setCategoryId] = useState(1);

    const [shippingMethod, setShippingMethod] = useState("string");
    const [packageWeight, setPackageWeight] = useState(2147483647);
    const [packageDimension, setPackageDimension] = useState("string");
    const [irregularDimension, setIrregularDimension] = useState(true);
    const [acceptReturn, setAcceptReturn] = useState(true);
    const [returnAllowedWithin, setReturnAllowedWithin] = useState(2147483647);
    const [returnShippingPaidBy, setReturnShippingPaidBy] = useState("string");
    const [returnMethod, setReturnMethod] = useState("string");

    const [startingBid, setStartingBid] = useState(0.01);
    const [startTime, setStartTime] = useState("2024-10-29T14:33:30.873Z");
    const [endTime, setEndTime] = useState("2024-10-29T14:33:30.873Z");
    const [scheduledTime, setScheduledTime] = useState("2024-10-29T14:33:30.873Z");
    const [isRecurring, setIsRecurring] = useState(true);
    const [recurrentPattern, setRecurrentPattern] = useState("string");



    const [selectedImages, setSelectedImages] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(0);

    // Handle file selection
    const handleFileChange = (event) => {
        setSelectedImages([...event.target.files]);
    };

    // Upload images to the server
    const handleUpload = async (productId) => {
        if (selectedImages.length === 0) {
            alert("Please select images to upload.");
            return;
        }

        const formData = new FormData();
        selectedImages.forEach((image) => {
            formData.append("imageFiles", image);
        });

        try {

            const response = await axiosInstance.post(
                `/api/products/${productId}/images`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    onUploadProgress: (progressEvent) => {
                        const percentCompleted = Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        );
                        setUploadProgress(percentCompleted);
                    },
                }
            );

            alert("Images uploaded successfully!");
            setUploadProgress(0);
            setSelectedImages([]); // Clear selected images after successful upload
            console.log(response.data.imageUrls); // Handle or display uploaded image URLs if needed
        } catch (error) {
            console.error("Error uploading images:", error);
            alert("Error uploading images. Please try again.");
        }
    };









    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axiosInstance.get("/api/Category/GetAllCategoriesWithSubcategories").then((res) => {
            setCategories(res.data);
        }).catch((err) => {
            console.log(err);
        });

    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.post("/api/Auctions/CreateAuction", {
            name: name,
            description: description,
            shippingfee: shippingfee,
            categoryId: categoryId,
            startingBid: startingBid,
            startTime: startTime,
            endTime: endTime,
            shippingMethod: shippingMethod,
            packageWeight: packageWeight,
            packageDimension: packageDimension,
            irregularDimension: irregularDimension,
            acceptReturn: acceptReturn,
            returnAllowedWithin: returnAllowedWithin,
            returnShippingPaidBy: returnShippingPaidBy,
            returnMethod: returnMethod,
            scheduledTime: scheduledTime,
            isRecurring: isRecurring,
            recurrentPattern: recurrentPattern,
        }).then((res) => {
            console.log(res);
            handleUpload(res.data.product.productId);
        }
        ).catch((err) => {
            console.log(err);
        });
    }






    return (
        <div className="w-full h-screen parent-container">
            <div className="flex w-full h-full">
                <SideBar
                    isSidebarVisible={isSidebarVisible}
                    onBreadcrumbChange={handleBreadcrumbChange}
                />

                <div
                    className={`flex flex-col md:w-5/6 bg-[#F5F0FA] ${isSidebarVisible ? "w-3/4" : "w-full"
                        }`}
                >
                    <HeaderSeller
                        toggleSidebarVisibility={toggleSidebarVisibility}
                        isSidebarVisible={isSidebarVisible}
                        breadcrumb={breadcrumb}
                    />



                    <div className="pb-20 bg-purple-100">
                        <div className="p-5">
                            <form className="" onSubmit={handleSubmit}>

                                <h2 className="text-2xl font-semibold py-7">Complete your listing</h2>
                                <div className="gap-4 p-10 lg:grid lg:grid-cols-4 lg:grid-rows-5 bg-slate-50 rounded-xl">

                                    <div className="col-span-4 my-2 lg:my-0 ">
                                        <h2 className="text-2xl "> Product Details</h2>
                                    </div>
                                    <div className="col-span-2 row-start-2 my-2 lg:my-0 ">
                                        <span>Product Name</span>
                                        <input type="text" className="w-full mt-2 border-4 rounded bg-slate-50" onChange={(e) => setName(e.target.value)} />
                                    </div>

                                    <div className="col-span-2 col-start-3 row-start-2 my-2 lg:my-0">
                                        <span>Category</span>
                                        {/* Using categories usestate bind categoryIds as values for a select option using a map*/}
                                        <select className="w-full mt-2 border-4 rounded bg-slate-50" onChange={(e) => setCategoryId(e.target.value)}>
                                            {categories.map((category) => {
                                                return (
                                                    <option key={category.categoryId} value={category.categoryId}>{category.name}</option>
                                                );
                                            }
                                            )}
                                        </select>

                                    </div>





                                    <div className="col-span-2 col-start-1 row-span-3 mb-8 lg:row-start-3 ">
                                        <span>Short Description</span>

                                        <textarea className='w-full h-full mt-2 border-4 rounded bg-slate-50' onChange={(e) => setDescription(e.target.value)}></textarea>

                                    </div>
                                </div>

                                <div className="p-10 mt-10 lg:grid lg:grid-cols-4 lg:grid-rows-2 bg-slate-50 rounded-xl">

                                    <div className="col-span-2 my-2 lg:my-0 ">
                                        <h2 className="text-2xl ">  Product Images</h2>
                                    </div>


                                    <div className="col-span-2 col-start-3 lg:my-0 ">
                                        <div className="w-12 border border-purple-700 rounded-md float-end ">
                                            < span
                                                htmlFor="upload"
                                                className="float-left cursor-pointer "
                                            >
                                                <span className=" ml-1.5 -mt-1.5 text-5xl text-center text-purple-700 ">
                                                    +
                                                </span>
                                            </span>
                                            <input
                                                id="upload"
                                                type="file"
                                                className="hidden p-5"

                                            />
                                        </div>
                                    </div>



                                    <div className="col-span-4 row-start-2 my-2 lg:my-0">
                                        <div>
                                            <h3>Upload Product Images</h3>
                                            <input
                                                type="file"
                                                multiple
                                                accept="image/*"
                                                onChange={handleFileChange}
                                            />
                                            <button onClick={handleUpload}>Upload Images</button>
                                            {uploadProgress > 0 && <p>Uploading: {uploadProgress}%</p>}
                                        </div>

                                    </div>



                                </div>






                                <div className="grid grid-cols-6 gap-2 p-10 mt-10 grid-rows-9 bg-slate-50 rounded-xl">
                                    <div className="col-span-6"><h2 className="text-2xl ">  Shipping</h2></div>
                                    <div className="col-span-3 row-start-2"><span>Shipping Methods</span></div>
                                    <div className="col-span-3 col-start-1 row-start-3">

                                        <select className="w-full h-10 border-4 round ed bg-slate-50" onChange={(e) => setShippingMethod(e.target.value)}>
                                            <option value="Standard Shipping">
                                                Standard Shipping
                                            </option>
                                            <option value="International Shipping">
                                                International Shipping
                                            </option>
                                            <option value="Two-Day Shipping">
                                                Two-Day Shipping
                                            </option>
                                            <option value="Same-Day Delivery">
                                                Same-Day Delivery
                                            </option>
                                            <option value="In-Store Pickup">
                                                In-Store Pickup
                                            </option>
                                        </select>

                                    </div>
                                    <div className="col-start-1 row-start-4"><span>Package weight</span></div>
                                    <div className="col-span-2 col-start-2 row-start-4"><span>Package dimensions</span></div>
                                    <div className="col-start-1 row-start-5">
                                        <input
                                            type="text"
                                            placeholder="           KG"
                                            className="w-20 placeholder-right border-4 rounded bg-slate-50"
                                            onChange={(e) => setPackageWeight(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-span-2 col-start-2 row-start-5"> <input
                                        type="text"
                                        placeholder="           IN"
                                        className="float-left w-20 placeholder-right border-4 rounded bg-slate-50"
                                        onChange={(e) => setPackageDimension(e.target.value)}
                                    />
                                        <span className="mx-1 text-center">
                                            X
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="           IN"
                                            className="w-20 placeholder-right border-4 rounded bg-slate-50"

                                        />
                                        <span className="mx-1 text-center">
                                            X
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="           IN"
                                            className="w-20 placeholder-right border-4 rounded bg-slate-50"

                                        /></div>
                                    <div className="col-span-3 col-start-1 row-start-6">
                                        <input
                                            type="checkbox"
                                            onChange={(e) => setIrregularDimension(e.target.checked)}

                                        />
                                        <span className="ml-2">Irregular package</span>
                                    </div>

                                    <div className="col-span-3 col-start-1 row-start-7">
                                        {/* input for geting shiiping fee */}
                                        <span>Shipping Fee &nbsp; Rs. </span>
                                        <input
                                            type="text"
                                            placeholder="  25000.00"
                                            className="w-[200px] placeholder-right border-4 rounded bg-slate-50"
                                            onChange={(e) => setShippingfee(e.target.value)}
                                        />
                                    </div>


                                    <div className="col-span-2 col-start-4 row-start-2"><span>Accept returns</span></div>
                                    <div className="col-start-6 row-start-2"><span className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            onChange={(e) => setAcceptReturn(e.target.checked)}

                                        />
                                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-400  "></div>
                                    </span></div>
                                    <div className="col-span-3 col-start-4 row-start-4"><span>Allowed with in</span></div>
                                    <div className="col-span-3 col-start-4 row-start-5">

                                        <select className="float-left w-full h-10 border-4 rounded bg-slate-50" onChange={(e) => setReturnAllowedWithin(e.target.value)}>
                                            <option value="30">30 Days</option>
                                            <option value="29">29 Days</option>
                                            <option value="28">28 Days</option>
                                            <option value="27">27 Days</option>
                                            <option value="26">26 Days</option>
                                            <option value="25">25 Days</option>
                                        </select>

                                    </div>
                                    <div className="col-span-3 col-start-4 row-start-6"> <span> Return shipping paid by</span></div>
                                    <div className="col-span-3 col-start-4 row-start-7">

                                        <select className="w-full h-10 border-4 rounded bg-slate-50" onChange={(e) => setReturnShippingPaidBy(e.target.value)}>
                                            <option value="Buyer">Paid by Buyer</option>
                                            <option value="Seller">Paid by Seller</option>
                                        </select>

                                    </div>
                                    <div className="col-span-3 col-start-4 row-start-8"><span>Return Method</span></div>
                                    <div className="col-span-3 col-start-4 row-start-9">

                                        <select className="w-full h-10 border-4 rounded bg-slate-50" onChange={(e) => setReturnMethod(e.target.value)}>
                                            <option value="Buyer">Money back</option>
                                            <option value="Seller">Bank Transfer</option>
                                        </select>


                                    </div>
                                </div>





                                <div className="grid grid-cols-6 gap-2 p-10 mt-10 grid-rows-9 bg-slate-50 rounded-xl">
                                    <div className="col-span-6"><h2 className="text-2xl ">Auction</h2></div>


                                    <div className="col-span-3 row-start-2"><span>Starting bid </span></div>
                                    <div className="col-span-3 col-start-1 row-start-3">
                                        <input type="text" className="w-full mt-2 border-4 rounded bg-slate-50" onChange={(e) => setStartingBid(e.target.value)} />
                                    </div>



                                    <div className="col-start-1 row-start-4"><span>Starting Time</span></div>
                                    <div className="col-span-3 col-start-1 row-start-5">
                                        {/* date time pecker to use setStartTime  */}
                                        <input
                                            type="datetime-local"
                                            className="w-full mt-2 border-4 rounded bg-slate-50"
                                            onChange={(e) => {
                                                // Convert the input to UTC format
                                                const localDateTime = new Date(e.target.value);
                                                const utcDateTime = new Date(localDateTime.getTime() - localDateTime.getTimezoneOffset() * 60000);
                                                setStartTime(utcDateTime.toISOString()); // Outputs in UTC, e.g., "2024-10-29T14:33:30.873Z"
                                            }}
                                        />
                                    </div>




                                    <div className="col-span-3 col-start-1 row-start-7">
                                        {/* input for geting shiiping fee */}
                                        <div>End time</div>
                                        <input
                                            type="datetime-local"
                                            className="w-full mt-2 border-4 rounded bg-slate-50"
                                            onChange={(e) => {
                                                // Convert the input to UTC format
                                                const localDateTime = new Date(e.target.value);
                                                const utcDateTime = new Date(localDateTime.getTime() - localDateTime.getTimezoneOffset() * 60000);
                                                setEndTime(utcDateTime.toISOString()); // Outputs in UTC, e.g., "2024-10-29T14:33:30.873Z"
                                            }}
                                        />
                                    </div>

                                    <div className="col-span-3 col-start-1 row-start-8 mt-8">
                                        {/* input for geting shiiping fee */}
                                        <div>Scheduled Time</div>
                                        <input
                                            type="datetime-local"
                                            className="w-full mt-2 border-4 rounded bg-slate-50"
                                            onChange={(e) => {
                                                // Convert the input to UTC format
                                                const localDateTime = new Date(e.target.value);
                                                const utcDateTime = new Date(localDateTime.getTime() - localDateTime.getTimezoneOffset() * 60000);
                                                setScheduledTime(utcDateTime.toISOString()); // Outputs in UTC, e.g., "2024-10-29T14:33:30.873Z"
                                            }}
                                        />
                                    </div>

                                    <div className="col-span-3 col-start-1 row-start-9 my-4">

                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                onChange={(e) => setIsRecurring(e.target.checked)}
                                            />
                                            <span className="ml-2">Recurring</span>
                                        </div>
                                    </div>

                                    <div className="col-span-3 col-start-4 row-start-2"><span>Recurrent Pattern</span></div>
                                    <div className="col-span-3 col-start-4 row-start-3">
                                        {/* select option to select  Recurrent Pattern*/}
                                        <select className="w-full h-10 border-4 rounded bg-slate-50" onChange={(e) => setRecurrentPattern(e.target.value)}>
                                            <option value="Daily">Daily</option>
                                            <option value="Weekly">Weekly</option>
                                            <option value="Monthly">Monthly</option>
                                        </select>

                                    </div>



                                </div>






                                <div className="float-right pt-5 mt-5 mr-24">
                                    <input
                                        type="reset"
                                        name="Chancel"
                                        value="Chancel"
                                        className="p-3 mr-10 text-lg font-medium text-center text-purple-900 bg-gray-300 border-2 cursor-pointer w-28 rounded-2xl"
                                    />

                                    <input
                                        type="submit"
                                        name="Save"
                                        value="Save"
                                        className="p-3 text-lg font-medium text-center text-white bg-purple-500 border-2 cursor-pointer w-28 rounded-2xl"
                                    />
                                </div>



                            </form>

                        </div>

                    </div>


                </div>

            </div>
        </div>


        // <h1>Product list</h1>
    );


}

export default Auction;