var contextMenuItem = {
  "id": "spendMoney",
  "title": "我就爱花钱怎么滴",
  contexts: ['selection']
}

chrome.contextMenus.create(contextMenuItem)

function isInt(value){
  return !isNaN(value) && 
    parseInt(Number(value)) == value && 
    !isNaN(parseInt(value, 10))
}

chrome.contextMenus.onClicked.addListener(function(clickData) {
  if (clickData.menuItemId === "spendMoney" && clickData.selectionText) {
    if (isInt(clickData.selectionText)) {
      chrome.storage.sync.get(['total', 'limit'], function(budget) {
        var newTotal = 0
        if (budget.total) {
          newTotal += parseInt(budget.total)
        }
        newTotal += parseInt(clickData.selectionText)
        chrome.storage.sync.set({'total': newTotal}, function() {
          if (newTotal >= parseInt(budget.limit)) {
            var notifOptons = {
              type: 'basic',
              iconUrl: 'icon48.png',
              title: '已达到上限',
              message: "Uh oh! 你的余额已超标！"
            }
            chrome.notifications.create('limitNotif', notifOptons)
          }
        })
      })
    }
  }
})

chrome.storage.onChanged.addListener(function(changes, areaName) {
  console.log(changes)
  console.log(areaName)
  chrome.browserAction.setBadgeText({
    "text": changes.total.newValue.toString()
  })
})