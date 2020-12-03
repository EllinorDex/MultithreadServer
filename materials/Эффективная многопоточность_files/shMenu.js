if (self==top)
{
	with(window.location)
	{
		s = protocol + "//" + host + "/?" + pathname.substr(1);
		if (-1 == pathname.indexOf("?"))
			s = s + search;
	}
	//s="<DIV><FONT style='color:#56789a;font-size:0.8em;font-family:arial;font-weight:bold;'>&lt;&lt;</FONT><A href='"+s+"' target=_top><font face='tahoma' style='font-size:8pt'>Показать меню</font></A></DIV>";
	s="&lt;&lt;<A href='"+s+"' target=_top>Показать&nbsp;меню</A>&nbsp;";

	document.write(s);
}