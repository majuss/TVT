
function defineScreen($title) {

	$("#game-list-header").text($title);
	$("#twitch-widget-gamelist").empty();
	$("#twitch-widget-streamlist").empty();
	$("#search").val("");
}


function searchChannel(search) {

	defineScreen("Search: " + search)

	$.ajax({
		url: 'https://api.twitch.tv/kraken/search/streams?client_id=jzkbprff40iqj646a697cyrvl0zt2m6&limit=100&q=' + search,
		type: 'GET',
		contentType: 'application/json',
		dataType: 'jsonp',
		success: function (data) {

			$.each(data.streams, function (index, value) {
				console.log(index + " " + value)
				console.log(value.channel.name)
				channel_name = value.channel.name
				channel_id = value.channel._id
				channel_image = value.preview.medium.replace('https', 'http')
				channgel_display_name = value.channel.display_name
				channel_status = value.channel.status

				$("#twitch-widget-streamlist").append("<div class='stream_img'><a href='#' name='" + channel_name + "' id='" + channel_id + "'><img src='" + channel_image + "'></a><br><b>" + channgel_display_name + "</b><br/><div id='channel_status'>" + channel_status + "</div></div>");

			})
		}
	});
}

function showGames() {

	defineScreen("All Games")

	$.ajax({
		url: 'https://api.twitch.tv/kraken/games/top?client_id=jzkbprff40iqj646a697cyrvl0zt2m6&limit=100&offset=0',
		type: 'GET',
		contentType: 'application/json',
		dataType: 'jsonp',
		success: function (data) {

			$.each(data.top, function (index, value) {

				game_id = value.game._id;
				console.log(value.game.name)
				game_name = value.game.name
				// .replace(" ", "\\xa0")
				game_image = value.game.box.medium.replace('https', 'http');
				game_viewers = value.viewers;

				$("#twitch-widget-gamelist").append("<div class='game_item' name=" + "naming" + " id='" + game_id + "'><img src='" + game_image + "'><br><b>" + game_name + "</b><br/><div class='game_status'>" + game_viewers + " viewers</div></div>");
				$("#"+ game_id).attr('name', game_name);
			})

		}
	});
}

function showChannels() {

	defineScreen("Channels")

	$.ajax({
		url: 'https://api.twitch.tv/kraken/streams?client_id=jzkbprff40iqj646a697cyrvl0zt2m6&limit=100',
		type: 'GET',
		contentType: 'application/json',
		dataType: 'jsonp',
		success: function (data) {

			$.each(data.streams, function (index, value) {
				console.log(index + " " + value)
				channel_name = value.channel.name
				channel_id = value._id
				channel_image = value.preview.medium.replace('https', 'http')
				channel_display_name = value.channel.display_name
				channel_viewers = value.viewers
				channel_status = value.channel.status

				$("#twitch-widget-streamlist").append("<div class='stream_img'><a href='#' name='" + channel_name + "' id='" + channel_id + "'><img src='" + channel_image + "'></a><br><b>" + channel_display_name + " (" + channel_viewers + " viewers)</b><br/><div id='channel_status'>" + channel_status + "</div></div>");
			})
		}
	});
}