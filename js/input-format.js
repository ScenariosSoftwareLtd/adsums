// Auto-format number inputs with commas as the user types
(function(){
  document.querySelectorAll('input[type=number]').forEach(function(el){
    // Create a formatted text input to replace it
    var txt = document.createElement('input');
    txt.type = 'text';
    txt.inputMode = 'decimal';
    txt.id = el.id;
    txt.className = el.className;
    txt.placeholder = el.placeholder || '';
    txt.style.cssText = el.style.cssText;
    txt.min = el.min;
    txt.step = el.step;

    // Copy initial value with commas
    var initVal = parseFloat(el.value);
    if(!isNaN(initVal) && initVal !== 0){
      txt.value = formatWithCommas(el.value);
    } else if(el.value === '0'){
      txt.value = '0';
    }

    // Store raw value as data attribute
    txt.dataset.raw = el.value;

    txt.addEventListener('input', function(){
      var pos = txt.selectionStart;
      var oldLen = txt.value.length;
      var raw = txt.value.replace(/[^0-9.\-]/g, '');
      txt.dataset.raw = raw;

      if(raw === '' || raw === '-' || raw === '.'){
        // Don't format yet
      } else {
        txt.value = formatWithCommas(raw);
      }

      // Adjust cursor position
      var newLen = txt.value.length;
      var newPos = pos + (newLen - oldLen);
      txt.setSelectionRange(Math.max(0, newPos), Math.max(0, newPos));

      // Fire events for calculators to pick up
      el.value = raw;
      el.dispatchEvent(new Event('input', {bubbles: true}));
    });

    txt.addEventListener('blur', function(){
      var raw = txt.dataset.raw;
      if(raw !== '' && !isNaN(parseFloat(raw))){
        txt.value = formatWithCommas(raw);
      }
    });

    // Replace the original input
    el.style.display = 'none';
    el.setAttribute('hidden', '');
    el.setAttribute('aria-hidden', 'true');
    el.tabIndex = -1;
    el.parentNode.insertBefore(txt, el.nextSibling);
  });

  function formatWithCommas(val){
    var parts = val.split('.');
    var whole = parts[0].replace(/[^0-9\-]/g, '');
    var neg = whole.startsWith('-');
    whole = whole.replace('-', '');
    whole = whole.replace(/^0+(?=\d)/, '');
    whole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    var result = (neg ? '-' : '') + whole;
    if(parts.length > 1){
      result += '.' + parts[1];
    }
    return result;
  }
})();
