describe('Alfresco ADF automation QA exercise', function() { 
	var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
    
 it('Get into QA Excercise', function() { 

browser.waitForAngularEnabled(false);
browser.get('http://qaexercise.envalfresco.com/settings'); 
browser.driver.manage().window().maximize();
element(by.xpath('//*[@id="adf-provider-selector"]/div/div[2]')).click();

element(by.xpath('//*[@id="mat-option-1"]')).click();

element(by.xpath('//*[@id="host-button"]')).submit();

element(by.xpath('//*[@id="username"]')).sendKeys("guest@example.com");

element(by.xpath('//*[@id="password"]')).sendKeys("Password");

element(by.xpath('//*[@id="login-button"]')).click();

browser.navigate().to("http://qaexercise.envalfresco.com/files");

element(by.xpath('//*[@id="document-list-container"]/adf-upload-drag-area/div/adf-toolbar/mat-toolbar/div/button[2]')).click();

var foldername=element(by.xpath('//*[@class="mat-dialog-title"]'));

foldername.getText()
	.then(function(text){
	    var logoutText = "New folder";
	    expect(text).toMatch(logoutText);
	    console.log("============= "+text);
	 });

element(by.xpath('//*[@id="adf-folder-name-input"]')).sendKeys("Shilpa-Krishna");

//expect(element(by.xpath('//*[@id="mat-dialog-0"]')).isPresent()).toBe(true); 
element(by.xpath('//*[@id="adf-folder-create-button"]')).click();

element(by.xpath('//*[@id="document-list-container"]/adf-upload-drag-area/div/adf-toolbar/mat-toolbar/div/button[2]')).click();

var foldername=element(by.xpath('//*[@class="mat-dialog-title"]'));

foldername.getText()
	.then(function(text){
	    var logoutText = "New folder";
	    expect(text).toMatch(logoutText);
	    console.log("============= "+text);
	 });

element(by.xpath('//*[@id="adf-folder-name-input"]')).sendKeys("Shilpa-Krishna");

//expect(element(by.xpath('//*[@id="mat-dialog-0"]')).isPresent()).toBe(true); 
element(by.xpath('//*[@id="adf-folder-create-button"]')).click();

browser.navigate().to("http://qaexercise.envalfresco.com/files");

element(by.xpath('//*[@class="adf-datatable-row ng-star-inserted"]//*[@data-automation-id="Shilpa-Krishna"]')).click();

element(by.xpath('//*[@id="action_menu_right_2"]')).click();

element(by.xpath('//div[@class="mat-menu-content"]/button[5]')).click();

});
});
