
        const displayText = document.getElementById('displayText');
        const toggleButton = document.getElementById('toggleButton');
        const offIndicator = document.getElementById('offIndicator');
        const onIndicator = document.getElementById('onIndicator');
        const toggleCountElement = document.getElementById('toggleCount');
        
       
        let isOn = false;
        let toggleCount = 0;
        
        
        function updateDisplay() {
            if (isOn) {
                displayText.textContent = 'ON';
                displayText.classList.remove('off-state');
                displayText.classList.add('on-state');
                offIndicator.classList.remove('active');
                onIndicator.classList.add('active');
            } else {
                displayText.textContent = 'OFF';
                displayText.classList.remove('on-state');
                displayText.classList.add('off-state');
                onIndicator.classList.remove('active');
                offIndicator.classList.add('active');
            }
            
          
        }
        
        
        function toggleState() {
            isOn = !isOn;
            toggleCount++;
            updateDisplay();
            
            
            displayText.style.transform = 'scale(1.1)';
            setTimeout(() => {
                displayText.style.transform = 'scale(1)';
            }, 150);
        }
        
      
        toggleButton.addEventListener('click', toggleState);
        
        
        updateDisplay();
        
       
        document.addEventListener('keydown', (event) => {
            if (event.code === 'Space' || event.code === 'Enter') {
                toggleState();
               
                toggleButton.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    toggleButton.style.transform = 'scale(1)';
                }, 150);
            }
        });