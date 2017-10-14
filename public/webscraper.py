import requests
import urllib2
from bs4 import BeautifulSoup
import json

url = "http://menus.tufts.edu/foodpro/shortmenu.asp?sName=TUFTS+DINING&locationNum=11&locationName=Dewick-MacPhie+Dining+Center&naFlag=1&WeeksMenus=This+Week%27s+Menus&myaction=read&dtdate=10%2F14%2F2017"
response = urllib2.urlopen(url)
#html = response.content

soup = BeautifulSoup(response, 'html.parser')
table = soup.find_all('a', attrs={'name', 'Recipe_Desc'})

dashcounter = 0
text = (soup.get_text())

start = 0
foods = []
lines = text.splitlines()
for line in lines:
	if "--" in line:
		start = 1
	if start == 1 and "--" not in line and "*" not in line and "  " not in line and not line == " " and "FoodPro" not in line and not line == u"\u00A0":
		if not line == "" :
			foods.append(line)

for food in foods:
	print(food)
#lines = [x for x in lines if (x != "" or "  " not in x) ]
#for line in lines:
	#print("[" + line + "]")

with open('dewickfoods.json', 'w') as outfile:
	json.dump(foods, outfile)

