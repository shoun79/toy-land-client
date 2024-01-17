import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from '../toyCard/toyCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const CategoriesTabs = () => {

    const [subCategorys, setSubCategorys] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        // Fetch categories from the API endpoint
        fetch('https://toy-land-server-delta.vercel.app/categories')
            .then(response => response.json())
            .then(data => setSubCategorys(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const handleTabSelect = (index) => {
        setSelectedCategory(subCategorys[index]);
    };

    useEffect(() => {
        if (selectedCategory) {
            // Fetch data for the selected category
            fetch(`https://toy-land-server-delta.vercel.app/toys/${selectedCategory.subCategory}`)
                .then(response => response.json())
                .then(data => setCategoryData(data))
                .catch(error => console.error('Error fetching category data:', error));
        }
    }, [selectedCategory]);


    return (
        <div data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center">
            <div className='text-center'>
                <h2 className='text-4xl font-bold'>Toys</h2>
            </div>
            <div>
                <Tabs onSelect={handleTabSelect}>
                    <div className='text-center'>
                        <TabList>
                            {subCategorys.map(category => (
                                <Tab key={category._id}>{category.subCategory}</Tab>
                            ))}
                        </TabList>
                    </div>

                    {subCategorys.map((category, index) => (

                        <TabPanel key={category._id}>
                            {/* <h2>{category.subCategory} Toys</h2> */}
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
                                {categoryData
                                    .filter(item => item.subCategory === category.subCategory)
                                    .map(toy => <ToyCard
                                        key={toy._id}
                                        toy={toy}
                                    ></ToyCard>
                                    )}
                            </div>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </div>
    );
};

export default CategoriesTabs;