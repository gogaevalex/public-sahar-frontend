import React from "react";
import VkAuth from "react-vk-auth";

export const RegistrationVK = () => {
    const handleVkResponse = (data) => {
        console.log(data);
    };


    return (
        <VkAuth apiId="xxxxxxx" callback={handleVkResponse} />
    )
}

