from rest_framework import serializers

from ..models import *
from album.models import *

class WorkPreviewSerializer(serializers.ModelSerializer):
    album = serializers.SlugRelatedField(
        many=False,
        read_only=True,
        slug_field='thumb'
    )

    class Meta:
        model = Work
        # lookup_field = 'uuid'
        fields = (
            'uuid',
            'slug',
            'name',
            'is_shown',
            'album',
        )


class AlbumImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlbumImage

        fields = (
            'image',
            'alt',
            'description',
        )


class AlbumSerializer(serializers.ModelSerializer):
    album_images = AlbumImageSerializer(many=True, read_only=True)
    class Meta:
        model = AlbumImage

        fields = (
            'album_images',
            'slug',
        )

class WorkSerializer(serializers.ModelSerializer):
    tags = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='name'
    )
    album = AlbumSerializer(many=False, read_only=True)

    class Meta:
        model = Work

        fields = (
            'uuid',
            'name',
            'tags',
            'album',
            'task',
            'task_en',
            'url',
        )
