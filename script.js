// 读取CSV文件并将数据插入表格
fetch('直屬學長姊.csv')  // 将 'your_data.csv' 替换为您的CSV文件路径
    .then(response => response.text())
    .then(data => {
        const tableBody = document.querySelector('tbody');
        const lines = data.split('\n');
        
        lines.forEach(line => {
            const cells = line.split(',');
            const row = document.createElement('tr');
            
            cells.forEach((cell, index) => {
                const cellElement = (index === 1) ? document.createElement('td') : document.createElement('td');
                
                if (index === 1) {
                    const imgElement = document.createElement('img');
                    imgElement.src = cell;
                    cellElement.appendChild(imgElement);
                } else {
                    cellElement.textContent = cell;
                }
                
                row.appendChild(cellElement);
            });
            
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('无法读取CSV文件:', error);
    });
