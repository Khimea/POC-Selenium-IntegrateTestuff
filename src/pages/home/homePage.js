const ele = require("./obj").obj;
var assert = require("assert");

const Menu = ele.menu;
const Home = ele.home;
const Cart = ele.carrito;
const login = ele.login;
const Details = ele.Details;
const POrder = ele.modalPlaceOrder;

const { until } = require("selenium-webdriver");

class page {
  goToURL = async () => {
    await driver.get("https://www.demoblaze.com");
  };
  /**
   * ACCIONES SIMPLES
   */
  typeUserName = async (username) => {
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(login.userName())).then((el) => {
      driver.wait(until.elementIsVisible(el)).then((ele) => {
        ele.sendKeys(username);
      });
    });
  };

  typePassword = async (password) => {
    await driver.wait(until.elementLocated(login.password())).then((el) => {
      driver.wait(until.elementIsVisible(el)).then((ele) => {
        ele.sendKeys(password);
      });
    });
  };

  clickLogin = async () => {
    await driver.wait(until.elementLocated(login.btnLogin())).then((el) => {
      driver.wait(until.elementIsVisible(el)).then((ele) => {
        ele.click();
      });
    });
  };

  clickCloseLogin = async () => {
    await driver.wait(until.elementLocated(login.btnClose())).then((el) => {
      driver.wait(until.elementIsVisible(el)).then((ele) => {
        ele.click();
      });
    });
  };

  confirmLogin = async () => {
    await driver.sleep(3000);
    return new Promise((resolve) => {
      driver.wait(until.elementLocated(login.lblUser())).then((element) => {
        driver.wait(until.elementIsEnabled(element)).then((el) => {
          el.getText().then((text) => {
            return resolve(text === "Welcome standard_user");
          });
        });
      });
    });
  };

  clickProduct = async (productName) => {
    await driver
      .wait(until.elementsLocated(Home.titleProducts()))
      .then((elements) =>
        elements.forEach((element) => {
          element.getText().then((text) => {
            if (text.toLowerCase() === productName.toLowerCase()) {
              driver.wait(until.elementIsEnabled(element)).then((el) => {
                el.click();
              });
            }
          });
        })
      );
  };

  clickMenu = async (option) => {
    await driver.wait(until.elementsLocated(Menu.btns())).then((elements) =>
      elements.forEach((element) => {
        element.getText().then((text) => {
          if (text.toLowerCase() === option.toLowerCase()) {
            driver.wait(until.elementIsEnabled(element)).then((el) => {
              el.click();
            });
          }
        });
      })
    );
  };

  clickAddCart = async () => {
    await driver.wait(until.elementLocated(Details.btnAdd())).then((ele) => {
      ele.click();
    });
  };

  acceptPopUp = async () => {
    await driver.wait(until.alertIsPresent());
    await driver.switchTo().alert().accept();
  };

  clickBackhome = async () => {
    await driver.wait(until.elementLocated(Menu.btnHome())).then((ele) => {
      ele.click();
    });
  };

  clickPlaceOrder = async () => {
    await driver.wait(until.urlContains("/cart.html"));
    await driver
      .wait(until.elementLocated(Cart.btnPlaceOrder()))
      .then((ele) => {
        ele.click();
      });
  };

  waitModal = async () => {
    await driver.wait(until.elementLocated(POrder.ModalPlaceOrder()));
  };

  typeName = async (name) => {
    await driver.wait(until.elementLocated(POrder.name())).then((el) => {
      driver.wait(until.elementIsVisible(el)).then((ele) => {
        ele.sendKeys(name);
      });
    });
  };

  typeCountry = async (country) => {
    await driver.wait(until.elementLocated(POrder.country())).then((el) => {
      driver.wait(until.elementIsVisible(el)).then((ele) => {
        ele.sendKeys(country);
      });
    });
  };

  typeCity = async (city) => {
    await driver.wait(until.elementLocated(POrder.city())).then((el) => {
      driver.wait(until.elementIsVisible(el)).then((ele) => {
        ele.sendKeys(city);
      });
    });
  };

  typeCard = async (card) => {
    await driver.wait(until.elementLocated(POrder.card())).then((el) => {
      driver.wait(until.elementIsVisible(el)).then((ele) => {
        ele.sendKeys(card);
      });
    });
  };

  typeMonth = async (month) => {
    await driver.wait(until.elementLocated(POrder.month())).then((el) => {
      driver.wait(until.elementIsVisible(el)).then((ele) => {
        ele.sendKeys(month);
      });
    });
  };

  typeYear = async (year) => {
    await driver.wait(until.elementLocated(POrder.year())).then((el) => {
      driver.wait(until.elementIsVisible(el)).then((ele) => {
        ele.sendKeys(year);
      });
    });
  };

  clickClose = async () => {
    await driver.wait(until.elementLocated(POrder.btnClose())).then((el) => {
      driver.wait(until.elementIsVisible(el)).then((ele) => {
        ele.click();
      });
    });
  };

  clickBtnOrder = async (option) => {
    await driver.sleep(3000);
    await driver.wait(until.elementsLocated(POrder.btns())).then((elements) =>
      elements.forEach((element) => {
        element.getText().then((text) => {
          if (text.toLowerCase() === option.toLowerCase()) {
            driver.wait(until.elementIsEnabled(element)).then((el) => {
              el.click();
            });
          }
        });
      })
    );
  };

  getSweetAlert = async () => {
    return new Promise((resolve) => {
      driver.wait(until.elementLocated(POrder.sweetAlert())).then((el) => {
        el.getText().then((text) => {
          return resolve(text);
        });
      });
    });
  };

  msgCompra = async () => {
    let data = this.getSweetAlert();
    return data;
  };
  /**
   * ACCIONES CONJUNTAS
   */
  CompletarOrden = async () => {
    await this.waitModal();
    await this.typeName("leo");
    await this.typeCountry("argentina");
    await this.typeCity("Capital Federal");
    await this.typeCard("123123123");
    await this.typeMonth("12");
    await this.typeYear("2025");
    await this.clickBtnOrder("purchase");
  };

  CompletarOrdenJson = async (json) => {
    await this.waitModal();
    await this.typeName(json.name);
    await this.typeCountry(json.country);
    await this.typeCity(json.city);
    await this.typeCard(json.card);
    await this.typeMonth(json.month);
    await this.typeYear(json.year);
  };

  selectMenu = async (menu) => {
    await this.clickMenu(menu);
  };

  loginUser = async (username, password) => {
    await this.typeUserName(username);
    await this.typePassword(password);
    await this.clickLogin();
    let confirm = await this.confirmLogin();
    assert.equal(confirm, true);
  };
}
module.exports = new page();
