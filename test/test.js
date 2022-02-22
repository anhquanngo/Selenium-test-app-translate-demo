const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('assert');
var fs = require("fs"); 

describe('Dịch', function() {
  describe('Dịch từ `Hello` ', function() {
    before(function() {
      // runs once before the first test in this block
    });
  
    after(function() {
      // runs once after the last test in this block
    });
  
    beforeEach(function() {
      // runs before each test in this block
    });
  
    afterEach(function(done) {
      setImmediate(done)
      // runs after each test in this block
    });
  
    // test cases
    it('Trả về "xin chào"', async function() {
      let driver = await new Builder().forBrowser('chrome').build();
      // Test name: Dịch
      // Step # | name | target | value
      // 1 | open | /translate | 
      await driver.get("http://uettranslation.ksechain.com/")
      // 2 | setWindowSize | 900x1056 | 
      await driver.manage().window().setRect({ width: 900, height: 1056 })
      // 3 | click | css=.translateStyle_from_language__1R9oq | 
      await driver.findElement(By.css(".translateStyle_from_language__1R9oq")).click()
      // 4 | type | css=.translateStyle_from_language__1R9oq | hello
      await driver.findElement(By.css(".translateStyle_from_language__1R9oq")).sendKeys("hello")
      // 5 | click | css=body | 
      await driver.findElement(By.css("body")).click()
      // 6 | click | css=.MuiButton-contained | 
      await driver.findElement(By.css(".MuiButton-contained")).click()
      // 7 | click | css=body | 
      await driver.findElement(By.css("body")).click()
      // 8 | click | css=.translateStyle_from_language__1R9oq | 
      await driver.findElement(By.css(".translateStyle_from_language__1R9oq")).click()
      await driver.sleep(2000)
      await driver.quit();
    });
  });
});

describe('Dịch', function() {
  describe('Dịch nhiều từ ', function() {
    // Phuong thuc doc file khong dong bo
    var data = fs.readFileSync('./test/input.txt', 'utf8');
    before(function() {
      // runs once before the first test in this block
    });
  
    after(function() {
      // runs once after the last test in this block
    });
  
    beforeEach(function() {
      // runs before each test in this block
    });
  
    afterEach(function(done) {
      setImmediate(done)
      // runs after each test in this block
    });
  
    // test cases
    it('Hoàn thành"', async function() {
        let driver = await new Builder().forBrowser('chrome').build();
        // Test name: Dịch
        // Step # | name | target | value
        // 1 | open | /translate | 
        await driver.get("http://uettranslation.ksechain.com/")
        // 2 | setWindowSize | 900x1056 | 
        await driver.manage().window().setRect({ width: 900, height: 1056 })
        // 3 | click | css=.translateStyle_from_language__1R9oq | 
        await driver.findElement(By.css(".translateStyle_from_language__1R9oq")).click()
          // 4 | type | css=.translateStyle_from_language__1R9oq | hello
        await driver.findElement(By.css(".translateStyle_from_language__1R9oq")).sendKeys(data.toString())
          // 5 | click | css=body | 
        await driver.findElement(By.css("body")).click()
        // 6 | click | css=.MuiButton-contained | 
        await driver.findElement(By.css(".MuiButton-contained")).click()
        // 7 | click | css=body | 
        await driver.findElement(By.css("body")).click()
        // 8 | click | css=.translateStyle_from_language__1R9oq | 
        await driver.findElement(By.css(".translateStyle_from_language__1R9oq")).click()
        await driver.sleep(6000)
        await driver.quit();
    });
  });
});

// describe('Login', function() {
//   describe('Login from to Google ', function() {
//     it('Trả về thông tin cá nhân', async function() {
//         async function waitForWindow(timeout = 2) {
//           await driver.sleep(timeout)
//           const handlesThen = vars["windowHandles"]
//           const handlesNow = await driver.getAllWindowHandles()
//           if (handlesNow.length > handlesThen.length) {
//             return handlesNow.find(handle => (!handlesThen.includes(handle)))
//           }
//           throw new Error("New window did not appear before timeout")
//         }
//         let driver = await new Builder().forBrowser('chrome').build()
//         let vars ={}
//         // Test name: Login
//         // Step # | name | target | value
//         // 1 | open | http://uettranslation.ksechain.com/ | 
//         await driver.get("http://uettranslation.ksechain.com/")
//         // 2 | setWindowSize | 1936x1056 | 
//         await driver.manage().window().setRect({ width: 1936, height: 1056 })
//         // 3 | mouseOver | css=.MuiButton-text | 
//         {
//           const element = await driver.findElement(By.css(".MuiButton-text"))
//           await driver.actions({ bridge: true }).move(element).perform()
//         }
//         // 4 | click | css=.MuiButton-text | 
//         vars["windowHandles"] = await driver.getAllWindowHandles()
//         // 5 | storeWindowHandle | root | 
//         await driver.findElement(By.css(".MuiButton-text")).click()
//         // 6 | selectWindow | handle=${win2331} | 
//         vars["win2331"] = await waitForWindow(3000)
//         // 7 | click | id=identifierId | 
//         vars["root"] = await driver.getWindowHandle()
//         // 8 | type | id=identifierId | anhquann0312@gmail.com
//         await driver.switchTo().window(vars["win2331"])
//         // 9 | click | css=.VfPpkd-LgbsSe-OWXEXe-k8QpJ > .VfPpkd-vQzf8d | 
//         await driver.findElement(By.id("identifierId")).click()
//         // 10 | mouseOver | css=.VfPpkd-LgbsSe-OWXEXe-k8QpJ > .VfPpkd-vQzf8d | 
//         await driver.findElement(By.id("identifierId")).sendKeys("anhquann0312@gmail.com")
//         // 11 | mouseOut | css=.VfPpkd-LgbsSe-OWXEXe-k8QpJ > .VfPpkd-vQzf8d | 
//         await driver.findElement(By.css(".VfPpkd-LgbsSe-OWXEXe-k8QpJ > .VfPpkd-vQzf8d")).click()
//         // 12 | click | name=password | 
//         {
//           const element = await driver.findElement(By.css(".VfPpkd-LgbsSe-OWXEXe-k8QpJ > .VfPpkd-vQzf8d"))
//           await driver.actions({ bridge: true }).move(element).perform()
//         }
//         // 13 | type | name=password | kenminpro1
//         {
//           const element = await driver.findElement(By.CSS_SELECTOR, "body")
//           await driver.actions({ bridge: true }).move(element, 0, 0).perform()
//         }
//         // 14 | sendKeys | name=password | ${KEY_ENTER}
//         await driver.findElement(By.name("password")).click()
//         // 15 | close |  | 
//         await driver.findElement(By.name("password")).sendKeys("kenminpro1")
//         // 16 | selectWindow | handle=${root} | 
//         await driver.findElement(By.name("password")).sendKeys(Key.ENTER)
//         // 17 | mouseOver | css=.MuiAvatar-img | 
//         await driver.close()
//         // 18 | click | css=.MuiAvatar-img | 
//         await driver.switchTo().window(vars["root"])
//         // 19 | mouseOut | css=.MuiAvatar-img | 
//         {
//           const element = await driver.findElement(By.css(".MuiAvatar-img"))
//           await driver.actions({ bridge: true }).move(element).perform()
//         }
//         // 20 | click | css=.MuiMenuItem-root:nth-child(1) | 
//         await driver.findElement(By.css(".MuiAvatar-img")).click()
//         // 21 | click | id=name | 
//         {
//           const element = await driver.findElement(By.CSS_SELECTOR, "body")
//           await driver.actions({ bridge: true }).move(element, 0, 0).perform()
//         }
//         // 22 | click | css=.Mui-focused > #name | 
//         await driver.findElement(By.css(".MuiMenuItem-root:nth-child(1)")).click()
//         // 23 | mouseOver | css=.css-1hw9j7s | 
//         await driver.findElement(By.id("name")).click()
//         // 24 | click | css=.css-1hw9j7s | 
//         await driver.findElement(By.css(".Mui-focused > #name")).click()
//         // 25 | mouseOut | css=.css-1hw9j7s | 
//         {
//           const element = await driver.findElement(By.css(".css-1hw9j7s"))
//           await driver.actions({ bridge: true }).move(element).perform()
//         }
//         // 26 | mouseOver | css=.MuiAvatar-img | 
//         await driver.findElement(By.css(".css-1hw9j7s")).click()
//         // 27 | click | css=.MuiAvatar-img | 
//         {
//           const element = await driver.findElement(By.CSS_SELECTOR, "body")
//           await driver.actions({ bridge: true }).move(element, 0, 0).perform()
//         }
//         // 28 | mouseOut | css=.MuiAvatar-img | 
//         {
//           const element = await driver.findElement(By.css(".MuiAvatar-img"))
//           await driver.actions({ bridge: true }).move(element).perform()
//         }
//         // 29 | click | css=.MuiMenuItem-root:nth-child(2) | 
//         await driver.findElement(By.css(".MuiAvatar-img")).click()
//         {
//           const element = await driver.findElement(By.CSS_SELECTOR, "body")
//           await driver.actions({ bridge: true }).move(element, 0, 0).perform()
//         }
//         await driver.findElement(By.css(".MuiMenuItem-root:nth-child(2)")).click()
//     })
//   })
// })
