// const express = require('express');
const request= require('supertest');
const {app} =require('../app'); 


test("GET", async ()=>{
    const response = await request(app).get('/api/v3/app/events');
    expect(response.statusCode).toBe(202);
})

