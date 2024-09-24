/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		keyframes: {
  			typing: {
  				'0%': {
  					width: '0%',
  					visibility: 'hidden'
  				},
  				'100%': {
  					width: '100%'
  				}
  			},
  			blink: {
  				'50%': {
  					borderColor: 'transparent'
  				},
  				'100%': {
  					borderColor: 'black'
  				}
  			},
  			text: {
  				'0%': {
  					visibility: 'hidden'
  				},
  				'100%': {
  					visibility: 'hidden'
  				}
  			},
  			box: {
  				'0%': {
  					width: '40px',
  					scale: '0'
  				},
  				'50%': {
  					width: '40px',
  					scale: '0'
  				},
  				'70%': {
  					width: '40px',
  					scale: '1'
  				},
  				'100%': {
  					width: '238px'
  				}
  			}
  		},
  		animation: {
  			typing: 'typing 2s steps(20) infinite alternate, blink .7s infinite',
  			typing2: 'typing 2s 2s alternate, text 2s',
  			typing3: 'typing 2s 2.5s alternate, text 2.5s',
  			typing4: 'typing 2s 3s alternate, text 3s',
  			typing5: 'typing 2s 3.5s alternate, text 3.5s',
  			typing6: 'typing 2s 4s alternate, text 4s',
  			box: 'box 2s alternate',
  			box3: 'box 2.5s alternate',
  			box4: 'box 3s alternate',
  			box5: 'box 3.5s alternate',
  			box6: 'box 4s alternate'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
