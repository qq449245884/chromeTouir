$(function() {

  chrome.storage.sync.get('limit', function(budget){
    if (budget.limit) {
      $('#limit').val(budget.limit)
    }
  })

  $("#saveLimit").click(function() {
    var limit = $('#limit').val()
    if (limit) {
      chrome.storage.sync.set({
        "limit": limit
      }, function() {
        close()
      })
    }
  })

  $('#resetTotal').click(function() {
    chrome.storage.sync.set({
      "total": 0
    }, function() {
      console.log('1111111111111111111')
      var notifOptons = {
        type: 'basic',
        iconUrl: 'icon48.png',
        title: '总支出已重置！',
        message: "总支出已重置为0"
      }
      chrome.notifications.create('limitNotif', notifOptons)
      notification.show()
    })
  })
})