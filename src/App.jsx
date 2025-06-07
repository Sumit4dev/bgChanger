import React from 'react'

const colorBoxes = [
  { id: 'red', color: '#E74C3C' },
  { id: 'green', color: '#2ECC71' },
  { id: 'pink', color: '#FF69B4' },
  { id: 'orange', color: '#FF5733' },
  { id: 'navyBlue', color: '#2C3E50' },
  { id: 'brown', color: '#8B4513' },
  { id: 'yellow', color: '#F1C40F' },
  { id: 'emerald', color: '#2ECC71' }
]

const App = () => {
  const bgChanger = (color) => {
    document.body.style.backgroundColor = color;
  }

  return (
    <div className='w-full h-screen  box-border m-0 p-20 flex flex-col items-center justify-between '>
      <h1 className='text-5xl font-semibold text-center font-serif text-white'>bgChanger</h1>
      <div className='p-10 flex flex-wrap justify-center gap-4'>
        {colorBoxes.map((box, idx) => (
          <div
            onClick={() => bgChanger(box.color)}
            key={idx}
            className='cursor-pointer text-white p-4 rounded'
            style={{ backgroundColor: box.color }}
          >
            {box.id}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App