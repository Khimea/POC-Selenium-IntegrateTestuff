'use strict';
var page = require ('../pages/home/homePage');

var assert = require('assert');
const { Given, When, Then } = require("@cucumber/cucumber");

Given(/^Dirigirse a demoblaze website/, async function () {
  await page.goToURL();
});

When(/^Seleccionar producto (.*)$/, async function (product) {
  await page.clickProduct(product)
});

When(/^Añadir producto al carro/, async function () {
  await page.clickAddCart()
  await page.acceptPopUp()
});

When(/^Volver al home/, async function () {
  await page.clickBackhome()
});

When(/^Seleccionar menu (.*)$/, async function (menu) {
  await page.selectMenu(menu)
});

When(/^Completar Login username (.*)$/, async function (username) {
  await page.typeUserName(username)
});

When(/^Completar Login password (.*)$/, async function (password) {
  await page.typePassword(password)
});

When(/^Confirmar login/, async function (username) {
  await page.clickLogin()
});

When(/^Logeamos con Username: (.*) y password: (.*)$/, async function (username,password) {
  await page.loginUser(username,password)
});

When(/^Visualizar carrito/, async function () {
  await page.selectMenu('Cart')
});

When(/^Crear orden de compra/, async function () {
  await page.clickPlaceOrder()
});

When(/^Completar formulario y comprar/, async function () {
  await page.CompletarOrden()
});

When(/^Completar formulario con JSON (.*)$/, async function (json) {
  let data = require("../../data/"+ json+".json")
  await page.CompletarOrdenJson(data)
});

When(/^Comprar orden/, async function () {
  await page.clickBtnOrder('purchase')
});

Then(/^Compra exitosa/, async function () {
  let result = await page.msgCompra()
  assert.equal(await result,'Thank you for your purchase!')
});