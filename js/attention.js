/*Doesn't work right now...*/
$(function() {
		var nameBox = document.getElementByID("name").parentElement;
		nameBox.addEventListener('click', function(){
			nameBox.toggleClass('active');
		});

		var projectsBox = document.getElementByID("projects").parentElement;
		projectsBox.addEventListener('click', function(){
			nameBox.toggleClass('active');
		});

		var blogBox = document.getElementByID("blog").parentElement;
		blogBox.addEventListener('click', function(){
			blogBox.toggleClass('active');
		});

		var contactBox = document.getElementByID("contact").parentElement;
		contactBox.addEventListener('click', function(){
			contactBox.toggleClass('active');
		});
});