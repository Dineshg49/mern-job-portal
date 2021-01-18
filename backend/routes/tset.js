const today = Date.now();

console.log(new Intl.DateTimeFormat('ko-KR', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit' ,hour12 : false }).format(today));