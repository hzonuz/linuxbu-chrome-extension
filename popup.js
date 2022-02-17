let changeURL = document.getElementById("changeURL");

changeURL.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let tabURL = tab.url;
  let strs = tabURL.split('/');

  if (strs[2].startsWith("vc")) {
    if (strs[4] !== "?html-view=true") {
      strs.splice(3, 2);
      strs.pop();
      strs.push("?html-view=true");
      let newURL = strs.join('/');
      chrome.tabs.update(undefined, { url: newURL });
    }
  }
});

//https://vc11.sbu.ac.ir/system/get-player?urlPath=/class-4002430103702/ => https://vc11.sbu.ac.ir/class-4002430103702/?html-view=true