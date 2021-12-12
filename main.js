
let mTabContainer = document.querySelector(".mTabContainer");
let mTabMenu = mTabContainer.querySelector(".mTabMenu");
let mTabMenuList = mTabContainer.querySelectorAll(".mTabMenu > ul > li > span");
let mTabContent = mTabContainer.querySelector(".mTabContent");
let mTabContentList = mTabContainer.querySelectorAll(".mTabContent > ul > li");


for(let i = 0; i < mTabMenuList.length; i++){
	mTabMenuList[i].addEventListener("mouseover", function(){
		mTabMenu.querySelector(".active").classList.remove("active");
		mTabContent.querySelector(".active").classList.remove("active");

		mTabMenuList[i].classList.add("active");
		mTabContentList[i].classList.add("active");
	})
}

