import React, { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        alert('Email: ${email} & Password: ${password}');
    };
}