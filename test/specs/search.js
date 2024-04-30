/*This is a testing program to open google and write the word Laptop

Author: Jonathan A. Ramírez Colón
Date: 4/30/2024

line 11: opens google
line 14: input the word thar I put
line 17: Press the keyboard "Enter"
*/

describe('Google Search', function () {
    it('First Test', async () => {
        browser.url('https://www.google.com/');
        
        await $('[name="q"]').setValue('Laptop')

        browser.keys('Enter')

        browser.pause(2000)
    })
})