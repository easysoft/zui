import $ from 'jquery';

// Manually highlight the menu item by clicking the simulation
$('#treeMenu').on('click', 'a', function () {
  $('#treeMenu li.active').removeClass('active');
  $(this).closest('li').addClass('active');
});

// Initialize the tab manager
$('#tabs-container').tabs({
  tabs: [{
    id: 'home',
    title: '首页',
    url: './home/home.html',
    type: 'iframe',
    forbidClose: true
  }]
});
const tabsInstance = $('#tabs-container').data('zui.tabs');
// Click on the left navigation bar to link with the tab page
$('#treeMenu').on('click', 'a', function () {
  // Exclude directory
  if ($(this).next().length !== 0) {
    return;
  }
  const tabName = $(this).text();
  const tabId = $(this).closest('li').data('id');
  if (Object.keys(tabsInstance.tabs).includes(tabName)) {
    $(`#tab-nav-item-${tabName} .tab-nav-link`).trigger('click');
    return;
  }
  const tab = {
    id: tabId,
    title: tabName,
    url: `./${tabId}/${tabId}.html`,
    type: 'iframe',
    forbidClose: false
  };
  tabsInstance.open(tab);
});

/**
 * Activate the left menu according to activeTabId and expand the parent directory
 * @date 2020-10-12
 * @param {string} activeTabId
 * @returns {any}
 */
function activeMenuItem(activeTabId) {
  $('#treeMenu li.active').removeClass('active');
  $(`#treeMenu li[data-id=${activeTabId}] a`).closest('li').addClass('active');
  const hasLists = $('#treeMenu li.active').parents('li.has-list');
  if(hasLists.length !== 0) {
    hasLists.each(function() {
      $(this).hasClass('open') || $(this).addClass('open');
    });
  }
}

// Click on the tab page to link with the left navigation bar
$('#tabs-container').on('click', '.tab-nav-link', function () {
  activeMenuItem($(this).data('id'));
});

$('#tabs-container').on('onClose', function () {
  setTimeout(() => {
    activeMenuItem($('#tabs-container .tab-nav-item.active').data('id'));
  }, 100);
});

$('#mainMenuToggle').on('click', function () {
  $('body').toggleClass('hide-menu');
});

// navigation bar auto collapse
let lastWindowSize = $(window).width();
$(window).on('resize', function() {
  if(lastWindowSize === $(window).width()) {
    return;
  }
  lastWindowSize = $(window).width()
  if ($(window).width() < 768 && !$('body').hasClass('hide-menu')) {
    $('body').addClass('hide-menu');
  }
  if ($(window).width() >= 768 && $('body').hasClass('hide-menu')) {
    $('body').removeClass('hide-menu');
  }
});
