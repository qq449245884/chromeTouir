$(function() {

  chrome.storage.sync.get(['total', 'limit'], function(budget){
    $('#total').text(budget.total)
    $('#limit').text(budget.limit)
  })

  $('#spnedAmount').click(function() {
    chrome.storage.sync.get(['total', 'limit'], function(budget) {
      var newTotal = 0
      if (budget.total) {
        newTotal += parseInt(budget.total)
      }

      var amount = $('#amount').val()
      if (amount) {
        newTotal += parseInt(amount)
      }

      chrome.storage.sync.set({
        'total': newTotal
      }, function() {
        if (amount && newTotal >= budget.limit) {
          var notifOptons = {
            type: 'basic',
            iconUrl: 'icon48.png',
            title: '已达到上限',
            message: "Uh oh! 你的余额已超标！"
          }
          chrome.notifications.create('limitNotif', notifOptons)
        }
      })

      $('#total').text(newTotal)

      $('#amount').val('')

    })
  })
})