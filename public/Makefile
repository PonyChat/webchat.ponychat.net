
SOURCES = js/mootools-1.2.5-core-nc.js \
          js/mootools-1.2.5.1-more-nc.js \
          js/qwebirc.js \
          js/config.js \
          js/copyright.js \
          js/crypto.js \
          js/jslib.js \
          js/md5.js \
          js/base64.js \
          js/session.js \
          js/sound.js \
          js/version.js \
          js/swfobject.js \
          js/irc/athemequery.js \
          js/irc/commandhistory.js \
          js/irc/commandparser.js \
          js/irc/commands.js \
          js/irc/baseircclient.js \
          js/irc/ircclient.js \
          js/irc/ircconnection.js \
          js/irc/flashconnection.js \
          js/irc/wsconnection.js \
          js/irc/irclib.js \
          js/irc/irctracker.js \
          js/irc/numerics.js \
          js/ui/atheme.js \
          js/ui/baseui.js \
          js/ui/baseuiwindow.js \
          js/ui/colour.js \
          js/ui/create.js \
          js/ui/menuitems.js \
          js/ui/notifications.js \
          js/ui/options.js \
          js/ui/panes.js \
          js/ui/style.js \
          js/ui/tabcompleter.js \
          js/ui/theme.js \
          js/ui/url.js \
          js/ui/panes/about.js \
          js/ui/panes/connect.js \
          js/ui/panes/embed.js \
          js/ui/panes/faq.js \
          js/ui/panes/feedback.js \
          js/ui/panes/list.js \
          js/ui/panes/options.js \
          js/ui/panes/privacypolicy.js \
          js/ui/frontends/qui.js

VERSION = $(shell git describe --always)

all: iris

iris: swf/flashsocket.swf qui-$(VERSION).js

swf/flashsocket.swf: swf/flashsocket.as
	as3compile $^ -o $@

qui-$(VERSION).js: $(SOURCES)
	java -jar bin/closure.jar \
	     --js_output_file $@ \
	     --create_source_map $@.map $^
	echo "//# sourceMappingURL=$@.map" >> $@

clean:
	rm -f swf/flashsocket.swf
	rm -f qui-*.js
	rm -f qui-*.js.map
