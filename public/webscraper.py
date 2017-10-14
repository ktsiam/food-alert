import requests
import urllib2
from bs4 import BeautifulSoup
import json

url = "http://menus.tufts.edu/foodpro/shortmenu.asp?sName=TUFTS+DINING&locationNum=11&locationName=Dewick-MacPhie+Dining+Center&naFlag=1&WeeksMenus=This+Week%27s+Menus&myaction=read&dtdate=10%2F14%2F2017"
response = urllib2.urlopen(url)
#html = response.content

soup = BeautifulSoup(response, 'html.parser')
table = soup.find_all('a', attrs={'name', 'Recipe_Desc'})
#table = soup.select('a')

#soup = BeautifulSoup('<a name="Recipe_Desc" onMouseOver="javascript:openDescWin('','Breakfast Egg & Ham Burrito')" onMouseOut="javascript:closeDescWin()">Breakfast Egg & Ham Burrito</a>')
#soup.a['name'] = ['Recipe_Desc', 'contents']

#print table.prettify()
#for row in table.findAll('td'):
#for name in table:
	#print name.prettify()
#print table.prettify()
#print soup;
#if text.find("-") == -1:
dashcounter = 0
text = (soup.get_text())
#for word in text.split():
#	if word == "**MENU":
#		break
#	if word == "--":
#		dashcounter = dashcounter + 1;
#	if not(dashcounter == 1 or dashcounter == 2):
#		print word;
#	if dashcounter == 2:
#		dashcounter = 0

foods = []
lines = text.splitlines()
for line in lines:
	if not line == "":
		foods.append(line)
		print line
#lines = [x for x in lines if (x != "" or "  " not in x) ]
#for line in lines:
	#print("[" + line + "]")

#with open('dewickfoods.json', 'w') as outfile:
	#json.dump(lines, outfile)
