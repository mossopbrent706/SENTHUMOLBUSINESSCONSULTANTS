
const YEAR_EL = document.getElementById('year');
if (YEAR_EL) YEAR_EL.textContent = new Date().getFullYear();

const names = [
  'Alex Mokoena','Boitumelo Dlamini','Chipo Ndlovu','Dineo Khumalo',
  'Eshe Okoye','Femi Adeyemi','Gugu Maseko','Hassan Abdullah'
];

const tbody = document.getElementById('demo-body');
if (tbody){
  const rows = names.map((name, i) => {
    const id = 1001 + i;
    return { id, name, status: 'Present' };
  });
  window.__rows = rows;

  function render(){
    tbody.innerHTML = rows.map((r, idx) => `
      <tr data-index="${idx}" tabindex="0" aria-label="Row ${idx+1} ${r.name} is ${r.status}">
        <td>${r.id}</td>
        <td>${r.name}</td>
        <td>
          <span class="badge ${r.status==='Present' ? 'ok' : (r.status==='Absent' ? 'absent' : '')}">${r.status}</span>
        </td>
        <td><button class="btn" data-toggle="${idx}">Toggle</button></td>
      </tr>
    `).join('');
  }
  render();

  function cycle(status){
    if (status==='Present') return 'Absent';
    if (status==='Absent') return 'Late';
    return 'Present';
  }

  tbody.addEventListener('click', (e)=>{
    const tr = e.target.closest('tr');
    const idx = tr?.dataset?.index;
    if (idx!==undefined){
      __rows[idx].status = cycle(__rows[idx].status);
      render();
    }
  });

  tbody.addEventListener('keydown', (e)=>{
    if (e.key === 'Enter' || e.key === ' '){
      const tr = e.target.closest('tr');
      const idx = tr?.dataset?.index;
      if (idx!==undefined){
        __rows[idx].status = cycle(__rows[idx].status);
        render();
      }
    }
  });

  window.exportCSV = function exportCSV(){
    const header = 'ID,Name,Status,MarkedAt';
    const now = new Date().toISOString();
    const lines = __rows.map(r => `${r.id},${r.name},${r.status},${now}`);
    const csv = [header, ...lines].join('\n');
    const blob = new Blob([csv], { type:'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'attendance-demo.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  window.resetDemo = function resetDemo(){
    __rows.forEach(r => r.status='Present');
    render();
  }
}
