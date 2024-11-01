import React, { useState, useEffect } from 'react';
import HeaderSeller from '../../components/layout/HeaderSeller/HeaderSeller';
import SideBar from '../../components/layout/SideBar/SideBar';
import axiosInstance from '../../utils/axiosInstance';
import Loading from '../../components/Loading/Loading';
import { toast } from 'sonner';
import { useNavigate } from "react-router-dom";


function Category() {
    const navigate = useNavigate();
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [breadcrumb, setBreadcrumb] = useState('Lansuwa > ');
    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState(null);
    const [loading, setLoading] = useState(false);




    const [selectedImages, setSelectedImages] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(0);

    // Handle file selection
    const handleFileChange = (event) => {
        setSelectedImages([...event.target.files]);
    };

    // Upload images to the server
    const handleUpload = async (categoryId) => {

        setLoading(true);

        if (selectedImages.length === 0) {
            alert("Please select images to upload.");
            return;
        }

        const formData = new FormData();
        selectedImages.forEach((image) => {
            formData.append("logoFiles", image);
        });

        try {
            console.log(categoryId);
            const response = await axiosInstance.post(
                `/api/categories/${categoryId}/logos`,
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

            toast.success("Category created successfully !");
            setUploadProgress(0);
            setSelectedImages([]); // Clear selected images after successful upload
            setLoading(false);
            navigate("/categoryproduct  ");
        } catch (error) {
            console.error("Error uploading images:", error);
            alert("Error uploading images. Please try again.");
            setUploadProgress(0);
            setLoading(false);
            toast.error("Error uploading images. Please try again.");
        }
    };




    function handleSubmit(event) {
        event.preventDefault();
        axiosInstance.post('/api/Category/CreateCategory', {
            name: categoryName,
            description: description,
            parentCategoryId: categoryId
        })
            .then((response) => {
                console.log(response.data);
                handleUpload(response.data.categoryId);
            })
            .catch((error) => {
                console.error(error);
                alert('Failed to create category');
            });
    }

    const toggleSidebarVisibility = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const handleBreadcrumbChange = (newBreadcrumb) => {
        setBreadcrumb(newBreadcrumb);
    };

    const getAllCategoryNames = (categories) => {
        const flattened = [];

        const traverse = (category) => {
            flattened.push({ categoryId: category.categoryId, name: category.name });
            category.subCategories.forEach(subCategory => traverse(subCategory));
        };

        categories.forEach(category => traverse(category));
        return flattened;
    };

    const [allCategoryNames, setAllCategoryNames] = useState([]);

    useEffect(() => {
        axiosInstance.get("/api/Category/GetAllCategoriesWithSubcategories").then((res) => {
            setAllCategoryNames(getAllCategoryNames(res.data));
        }).catch((err) => {
            console.log(err);
        });

    }, []);



    return (
        <div className='w-full h-screen parent-container'>
            <React.Fragment>
                {loading && (
                    <Loading />
                )}
                <div className="flex w-full h-full">
                    <SideBar isSidebarVisible={isSidebarVisible} onBreadcrumbChange={handleBreadcrumbChange} />
                    <div className={`flex flex-col md:w-5/6 bg-[#F5F0FA] ${isSidebarVisible ? 'w-3/4' : 'w-full'}`}>
                        <HeaderSeller toggleSidebarVisibility={toggleSidebarVisibility} isSidebarVisible={isSidebarVisible} breadcrumb={breadcrumb} />
                        <div className="flex-grow p-4 text-black border border-solid border-neutral-200">
                            <div>
                                <div className='pb-20 bg-purple-100'>
                                    <h2 className='pt-3 pl-10 ml-20 text-xl font-inter'>Add new category</h2>
                                    <div className='-mt-9'>
                                        <form onSubmit={handleSubmit} className='p-10'>
                                            <table className='w-11/12 ml-20 bg-slate-50 rounded-xl'>
                                                <thead>
                                                    <tr>
                                                        <th className='p-5 pt-10 pl-10 ml-0 text-xl text-left'>Category Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className='w-1/2 pb-16 pl-10 text-left'>Category Name</td>
                                                        <td className='float-left w-1/2 pl-10 text-left'>Description</td>
                                                    </tr>
                                                    <tr>
                                                        <td>

                                                            <input type="text" className='w-full border-4 mt-[-1000px]' onChange={(e) => setCategoryName(e.target.value)} />

                                                            <p>Select Parent Category if this is a subcategory</p>
                                                            <div className='pb-5 mt-2 mb-16'>
                                                                <select className="w-full mt-2 border-4 rounded bg-slate-50" onChange={(e) => setCategoryId(e.target.value)}>
                                                                    {allCategoryNames.map((category) => {
                                                                        return (
                                                                            <option key={category.categoryId} value={category.categoryId}>{category.name}</option>
                                                                        );
                                                                    }
                                                                    )}
                                                                </select>
                                                            </div>
                                                            <label htmlFor="upload" className='float-left w-11/12 pl-10 mb-5 text-left -mt-14'>Images</label>
                                                            <div className="float-right w-12 mb-5 mr-5 -mt-8 border border-purple-700 rounded-md">
                                                                <label htmlFor="upload" className="float-left cursor-pointer">
                                                                    <span className="float-left ml-1.5 -mt-1.5 text-5xl text-center text-purple-700">+</span>
                                                                </label>
                                                                <input id="upload" type="file" className="hidden p-5" />
                                                            </div>
                                                            <div className="relative float-left w-11/12 p-10 ml-10 -mt-3 border-2 rounded-lg bg-slate-50 min-h-40" id="dropzone">


                                                                <input
                                                                    type="file"
                                                                    multiple
                                                                    accept="image/*"
                                                                    onChange={handleFileChange}
                                                                />
                                                                {/* <button onClick={handleUpload}>Upload Images</button> */}
                                                                {uploadProgress > 0 && <p>Uploading: {uploadProgress}%</p>}




                                                                <div className="text-center">
                                                                    <img className="w-12 h-12 mx-auto" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt="Upload icon" />
                                                                    <p className="mt-1 text-xs text-gray-500">Drag and drop images & videos</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className='float-left w-11/12 pb-5 text-left'>
                                                            <input type="text" className='float-left w-11/12 ml-10 -mt-12 border-2 rounded bg-slate-50 min-h-72' value={description} onChange={(e) => setDescription(e.target.value)} />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className='float-right pt-5 mt-5 mr-24'>
                                                <input type='reset' name='Chancel' value="Chancel" className='p-2 mr-10 text-sm font-medium text-center text-purple-900 bg-gray-300 border-2 cursor-pointer w-28 rounded-2xl' />
                                                <input type='submit' name='Save' value="Create" className='p-2 text-sm font-medium text-center text-white bg-purple-500 border-2 cursor-pointer w-28 rounded-2xl' />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
}

export default Category;
