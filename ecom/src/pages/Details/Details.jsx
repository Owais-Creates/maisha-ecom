import React, { useState } from 'react';
import './Details.css';
import { BsPencilFill } from "react-icons/bs";
import { ImCheckmark } from "react-icons/im";

function Details() {

    const [editingField, setEditingField] = useState(null); 
    const [userName, setUserName] = useState("Owais");
    const [userEmail, setUserEmail] = useState("owaisali5371@gmail.com");
    const [userPhone, setUserPhone] = useState("9717070697");

    const handleTrigger = (field) => {
        if (editingField === field) {
            setEditingField(null);
        } else {
            setEditingField(field);
        }
    };

    const handleName = (e) => {
        const value = e.target.value;
        if (value.trim().length > 0) {
            setUserName(value);
        }
    }

    const handleEmail = (e) => {
        const value = e.target.value;
        setUserEmail(value);
    }

    const handlePhone = (e) => {
        const value = e.target.value;
        
        if (isNaN(value)) {
            setUserPhone("9717070697"); // Reset to default if invalid
            return;
        }

        if (value.trim().length > 0) {
            setUserPhone(value);
        }
    }

    return (
        <>
            <p className='name'>
                Name: {editingField === 'name' ? (
                    <input 
                        onInput={handleName} 
                        type="text" 
                        placeholder='Enter Name' 
                        value={userName}
                    />
                ) : (
                    <span>{userName}</span>
                )}

                <span
                    className='pencil-icon'
                    onClick={() => handleTrigger('name')}
                >
                    {editingField === 'name' ? <ImCheckmark /> : <BsPencilFill />}
                </span>
            </p>

            <p className='email'>
                Email: {editingField === 'email' ? (
                    <input 
                        onInput={handleEmail} 
                        type="text" 
                        placeholder='Enter Email' 
                        value={userEmail}
                    />
                ) : (
                    <span>{userEmail}</span>
                )}

                <span
                    className='pencil-icon'
                    onClick={() => handleTrigger('email')}
                >
                    {editingField === 'email' ? <ImCheckmark /> : <BsPencilFill />}
                </span>
            </p>

            <p className='phone'>
                Phone: {editingField === 'phone' ? (
                    <input 
                        onInput={handlePhone} 
                        type="text" 
                        placeholder='Enter Phone' 
                        value={userPhone}
                    />
                ) : (
                    <span>{userPhone}</span>
                )}

                <span
                    className='pencil-icon'
                    onClick={() => handleTrigger('phone')}
                >
                    {editingField === 'phone' ? <ImCheckmark /> : <BsPencilFill />}
                </span>
            </p>
        </>
    );
}

export default Details;
