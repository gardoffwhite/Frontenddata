document.getElementById('updateForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const charname = document.getElementById('charname').value;
  const level = document.getElementById('level').value;
  const health = document.getElementById('health').value;

  const data = {
    charname: charname,
    data: {
      level: level,
      health: health
    }
  };

  try {
    const response = await fetch('https://backenddata-brzf.onrender.com/api/updatechar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      alert('อัปเดตข้อมูลสำเร็จ');
    } else {
      alert('เกิดข้อผิดพลาด: ' + result.error);
    }
  } catch (error) {
    alert('ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์: ' + error.message);
  }
});
